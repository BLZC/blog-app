/**
 * 优点：便于寻找错误
 */
import {SHARE} from '../action/action-types';
/**
 *
 * @param {*} state
 * @param {*} action
 * 注意： state改变不是由Reducer改变的，是在store中改变的
 * reducer必须是纯函数，不能在reducer中时间戳或者向后台请求数据
 */
export default function changeState(state = false, action) {
  switch (action.type) {
    case SHARE:
      return (state = true);
    default:
      return state;
  }
}
