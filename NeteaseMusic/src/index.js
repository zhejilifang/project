import dva from 'dva';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/discover').default);
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router/index.jsx').default);

// 5. Start
app.start('#root');