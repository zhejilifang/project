> ### es6
- async/await
    ```
        await 返回值做为resolve参数
    ```
----
> ### vuex
- 需下载vuex的包
    
    - src/main.js中
        ```
            //引入store
            import store from './store/index';
            
            new Vue({
                ...,
                store
                ，
                ...
            })
        ```
    - src/store/index.js中
        ```
            import Vue from 'vue';
            import Vuex from 'vuex';
            import createLogger from 'vuex/dist/logger'；//日志插件
            
            import indexSto from './modules/indexStore';
            
            Vue.use(Vuex);
            
            //抛出store实例
            export default new Vuex.Store({
                //模块化方式，方便执行各模块命名空间下的方法，模块之间的方法互不影响
                modules:{
                    indexSto
                },
                //这个就是不跟模块有关系，相当于全局store下的数据
                state:{
                    a:520
                },
                plugins: [createLogger()]
            })
            
        ```
    - src/store/modules/indexStore.js中
        ```
            // 模块中的数据
            const state = {
                num:1000
            };
            
            // 派生的数据，会被缓存
            const getters = {
                date() {
                    return 值date;
                }
            }
            
            // 模块中的同步改变
            // commit结合mutation
            // 数据更改,直接赋值即可
            // 这个里面不能进行异步操作
            const mutations = {
                changeNum(state,{payload}) {
                    state.num = payload解析的值
                }
            }
            
            // 模块中的异步改变
            // dispatch结合action
            // 这个里面可以写异步操作
            const actions = {
                // 第一个参数为context
                // context里面就是这个模块仓库,但是不能直接修改仓库中的state值，
                // 需要结合commit的同步来进行修改
                changeNumAsync( {commit} , action ) {
                    setTimeout(() => {
        				commit('changeNum', action);
        			}, 1000);
                }
            }
            
            export default ({
            	namespaced:命名空间名,
            	state,
            	getters,
            	mutations,
            	actions
            })
            
        ```
        
    - src/某个.vue中
        ```
            <template>
                <div>
                    <button @click="changeNum('+')">加一</button>
                    <span>{{this.$store.state.app.num}}</span>
                    <button @click="changeNum('-')">减一</button>
                </div>
            </template>
            <script>
                export default {
                    name:'app',
                    // mounted中可以拿到main.js中的注入的store实例--通过this.$store来进行操作
                    mounted(){
                      console.log('某-this:',this.$store);
                    },
                    methods:{
                         changeNum(type) {
                         
                            //commit结合mutation
                            // this.$store.commit('changeNum',{payload:type})
                            
                            //dispatch结合action
                            //能触发日志，记录前后数据,方便调试/维护
                            this.$store.dispatch({
                              type:'模块仓库的命名空间名/changeNumAsync',
                              payload:type
                            })
                        }
                    }
                }
            </script>

        ```
    