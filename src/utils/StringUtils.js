
const StringUtils = {

  /**
   * null 또는 undefined 일 경우 true를 반환한다.
   */
  isNull: (str) => {
    return !!(str === null || str === undefined)
  },
  /**
   * null 이거나, 길이가 0일 경우 true를 반환한다(undefined 포함)
   * 빈 값만 있을 경우에도 true를 반환한다.
   */
  isEmpty: (str) => {
    if (StringUtils.isNull(str)) {
      return true
    }
    return str.trim().length === 0
  },
  /**
   *
   */
  phoneFormatter: (val) => {
    if( typeof val === 'number') val  += "";
    let num = val.replace(/[^0-9]/g, '');

    let retNum = "";
    if(num.length == 11)        retNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    else if(num.length == 8)    retNum = num.replace(/(\d{4})(\d{4})/, "$1-$2");
    else {
      if(num.indexOf("02") == 0) retNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      else                             retNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    return retNum;
  }
}

export default StringUtils