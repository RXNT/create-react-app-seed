import MobileDetect from 'mobile-detect';
import React from 'react';

var md = new MobileDetect(window.navigator.userAgent);

module.exports = {
  getBrowser : function() {
    const isOpera = (!!window.opr && !!opr.addons) || !!window.opera
                    || navigator.userAgent.indexOf(' OPR/') >= 0;
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    const isEdge = !(isIE) && !!window.StyleMedia;
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    const isBlink = (isChrome || isOpera) && !!window.CSS;
    let browser;

    if (isOpera) {
      browser = 'opera';
    } else if (isFirefox) {
      browser = 'firefox';
    } else if (isSafari) {
      browser = 'safari';
    } else if (isIE) {
      browser = 'ie';
    } else if (isEdge) {
      browser = 'edge';
    } else if (isChrome) {
      browser = 'chrome';
    } else if (isBlink) {
      browser = 'blink';
    } else {
      browser = 'unknown';
    }
    return browser;
  },
  getDevice : function() {
    let device = md.mobile();
    if(device != '' && device != null && device != undefined) {
      return "mobile";
    } else {
      return "desktop";
    }
  },
  getUTCDate : function() {
    let options = { hour12: false };
    let localDate = new Date().toLocaleString('en-US', options);
    if(localDate.indexOf(',') >= 0) {
      let currentDtTm = localDate.split(',');
      let date = currentDtTm[0].split('/');
      let time = currentDtTm[1].split(':');
      return new Date(Date.UTC(date[2], date[0] - 1,date[1], time[0], time[1], time[2]));
    } else {
      let currentDtTm = localDate.replace(/[^ -~?]/g,'').split(' ');
      let date = currentDtTm[0].split('/');
      let time = currentDtTm[1].split(':');
      return new Date(Date.UTC(parseInt(date[2], 10), parseInt(date[0], 10) - 1,parseInt(date[1], 10), parseInt(time[0], 10), parseInt(time[1], 10), parseInt(time[2], 10)));
    }
  },
  /**
   * renderPaginationPanel
   */
  renderPaginationPanel(props) {
    return (
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-xs-6'>
          <div className='pull-left'>
            <button className={props.currPage === 1 ? 'disabledPageButton pagingPanel' : 'pagingPanel'}
              disabled={props.currPage === 1} onClick={(evt) => { evt.preventDefault(); props.changePage(1)}}>
              <i className='glyphicon glyphicon-step-backward' />
            </button>
            <button className={props.currPage === 1 ? 'disabledPageButton pagingPanel' : 'pagingPanel'}
              disabled={props.currPage === 1}
              onClick={(evt) => { evt.preventDefault(); props.changePage(props.currPage - 1)}}>
              <i className='glyphicon glyphicon-triangle-left' />
            </button>
            <input type='number'
              style={ { maxWidth: '40px' } }
              className='pagingPanel'
              value={props.currPage} min="1" max={props.totalPages}
              onChange={e => { e.preventDefault(); props.changePage(e.target.value)}} />
            <span className='pagingPanel'> / { props.totalPages }</span>
            <button className={props.currPage === props.totalPages ? 'disabledPageButton pagingPanel' : 'pagingPanel'}
              disabled={props.currPage === props.totalPages}
              onClick={(evt) => {evt.preventDefault(); props.changePage(props.currPage + 1)}}>
              <i className='glyphicon glyphicon-triangle-right pagingPanel' />
            </button>
            <button className={props.currPage === props.totalPages ? 'disabledPageButton pagingPanel' : 'pagingPanel'}
              disabled={props.currPage === props.totalPages}
              onClick={(evt) => {evt.preventDefault(); props.changePage(props.totalPages)}}>
              <i className='glyphicon glyphicon-step-forward' />
            </button>
          </div>
          <div className='pull-left pagingPanel'>
            { props.components.sizePerPageDropdown }
            <span className='pagingPanel'> items per page</span>
          </div>
        </div>
      </div>
    );
  },
};
