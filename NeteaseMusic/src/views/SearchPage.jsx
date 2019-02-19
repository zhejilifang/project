import React, { useState, useEffect } from 'react';
import { Icon } from "antd-mobile";
import styles from "./SearchPage.scss";
import { connect } from "dva";

function SearchPage(props) {

  console.log('hots', props.search.searchHot)
  let [search, setSearch] = useState('');
  let [showSuggest, setShowSuggest] = useState(false);
  let [showResult, setShowResult] = useState(false);
  let [showHots, setShowHots] = useState(true);

  useEffect(() => {
    props.searchHot();
  }, []);

  useEffect(() => {
    if (search) {
      props.searchSuggest(search);
    }
    setShowSuggest(!!search);
    setShowResult(false);
    setShowHots(true);
  }, [search]);

  function searchChange(e) {
    setSearch(e.target.value)
  }

  function searchResult(e) {
    console.log('e...', e, e.keyCode)
    if (e.keyCode === 13 && search) {
      setShowSuggest(false);
      setShowResult(true);
      setShowHots(false);
      props.searchResult(search);
    }
  }

  function getSearchResult(e) {
    console.log('getSearchResult...', e.target.dataset.name)
    setShowSuggest(false);
    setShowResult(true);
    setShowHots(false);
    props.searchResult(e.target.dataset.name);
  }

  function goPlay(e) {
    if (e.target.tagName.toUpperCase() === 'P') {
      props.history.push({
        pathname: `/play/${e.target.dataset.id}`
      })
    }
  }

  return (
    <div className="container">
      <div className={styles.search_page}>
        <header className={styles.search_header}>
          <p className={styles.search_cont}>
            <Icon type="search" size="xs" color="#999" className={styles.search_icon} />
            <input className={styles.search_ipt} type="text" placeholder="知否知否 最近很火哦" autoFocus onChange={searchChange} onKeyDown={searchResult} />
          </p>
          <span className={styles.search_back} onClick={() => window.history.back()}>取消</span>
        </header>
        <div className={styles.search_suggest} onClick={getSearchResult}>
          {showSuggest ? <div className={styles.suggest_cont}>{
            props.search.searchSuggest.map((item, index) => {
              return <p className={styles.suggest_item} key={index} data-name={item.name}>{item.name}</p>
            })
          }</div> : null}
        </div>
        {showHots ?
          <div className={styles.search_hots}>
            <div className={styles.hot_title}>
              热门搜索
            </div>
            <div className={styles.hot_cont} onClick={getSearchResult}>
              {
                props.search.searchHot.map((item, index) => {
                  return <span data-name={item.first} className={styles.hot_tag} key={index}>{item.first}</span>
                })
              }
            </div>
          </div> : null
        }
        <div className={styles.search_result}>
          {showResult ? <div className={styles.result_cont} onClick={goPlay}>{
            props.search.searchResult.map((item, index) => {
              return <p className={styles.result_item} key={index} data-id={item.id}>{item.name}</p>
            })
          }</div> : null
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchHot: () => {
      dispatch({
        type: 'search/searchHot'
      })
    },
    searchSuggest: payload => {
      dispatch({
        type: 'search/searchSuggest',
        payload
      })
    },
    searchResult: payload => {
      dispatch({
        type: 'search/searchResult',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);