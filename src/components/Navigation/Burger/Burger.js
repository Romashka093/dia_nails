import React, { Component } from 'react';
import Menu from '../Menu/Menu';
// import css from './Burger.module.css';
import Toggleable from '../../renderProp/Toggleable';

var classNames = require('classnames');
classNames('foo', 'bar');

export class Burger extends Component {
  state = {
    isOpen: false,
  };

  handleOpenMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    // const { handleOpenMenu } = this;
    return (
      <div>
        <Toggleable>
          {({ on, onToggle }) => (
            <div>
              <button onClick={onToggle}>{on ? '\u00D7' : '\u2630'}</button>
              {on && <Menu />}
            </div>
          )}
        </Toggleable>
      </div>
    );

    // !isOpen ? (
    //   <div onClick={handleOpenMenu} className={css.container}>
    //     <input
    //       type="checkbox"
    //       id="checkbox1"
    //       className={
    //         isOpen
    //           ? classNames({
    //               [css.checkbox1]: true,
    //               [css.visuallyHidden]: true,
    //             })
    //           : classNames({
    //               [css.checkbox1]: true,
    //               [css.visuallyHidden]: true,
    //             })
    //       }
    //     />
    //     <label className={css.checkbox1}>
    //       <div
    //         className={classNames({
    //           [css.hamburger]: true,
    //           [css.hamburger1]: true,
    //         })}
    //       >
    //         <span
    //           className={
    //             isOpen
    //               ? classNames({
    //                   [css.checkedBar1]: true,
    //                   [css.bar]: true,
    //                   [css.bar1]: true,
    //                 })
    //               : classNames({
    //                   [css.bar]: true,
    //                   [css.bar1]: true,
    //                 })
    //           }
    //         />
    //         <span
    //           className={
    //             isOpen
    //               ? classNames({
    //                   [css.checkedBar2]: true,
    //                   [css.bar]: true,
    //                   [css.bar2]: true,
    //                 })
    //               : classNames({
    //                   [css.bar]: true,
    //                   [css.bar2]: true,
    //                 })
    //           }
    //         />
    //         <span
    //           className={
    //             isOpen
    //               ? classNames({
    //                   [css.checkedBar3]: true,
    //                   [css.bar]: true,
    //                   [css.bar3]: true,
    //                 })
    //               : classNames({
    //                   [css.bar]: true,
    //                   [css.bar3]: true,
    //                 })
    //           }
    //         />
    //         <span
    //           className={
    //             isOpen
    //               ? classNames({
    //                   [css.checkedBar4]: true,
    //                   [css.bar]: true,
    //                   [css.bar4]: true,
    //                 })
    //               : classNames({
    //                   [css.bar]: true,
    //                   [css.bar4]: true,
    //                 })
    //           }
    //         />
    //       </div>
    //     </label>
    //   </div>
    // ) : (
    //   <div>
    //     <div onClick={handleOpenMenu} className={css.container}>
    //       <input
    //         type="checkbox"
    //         id="checkbox1"
    //         className={
    //           isOpen
    //             ? classNames({
    //                 [css.checkbox1]: true,
    //                 [css.visuallyHidden]: true,
    //               })
    //             : classNames({
    //                 [css.checkbox1]: true,
    //                 [css.visuallyHidden]: true,
    //               })
    //         }
    //       />
    //       <label className={css.checkbox1}>
    //         <div
    //           className={classNames({
    //             [css.hamburger]: true,
    //             [css.hamburger1]: true,
    //           })}
    //         >
    //           <span
    //             className={
    //               isOpen
    //                 ? classNames({
    //                     [css.checkedBar1]: true,
    //                     [css.bar]: true,
    //                     [css.bar1]: true,
    //                   })
    //                 : classNames({
    //                     [css.bar]: true,
    //                     [css.bar1]: true,
    //                   })
    //             }
    //           />
    //           <span
    //             className={
    //               isOpen
    //                 ? classNames({
    //                     [css.checkedBar2]: true,
    //                     [css.bar]: true,
    //                     [css.bar2]: true,
    //                   })
    //                 : classNames({
    //                     [css.bar]: true,
    //                     [css.bar2]: true,
    //                   })
    //             }
    //           />
    //           <span
    //             className={
    //               isOpen
    //                 ? classNames({
    //                     [css.checkedBar3]: true,
    //                     [css.bar]: true,
    //                     [css.bar3]: true,
    //                   })
    //                 : classNames({
    //                     [css.bar]: true,
    //                     [css.bar3]: true,
    //                   })
    //             }
    //           />
    //           <span
    //             className={
    //               isOpen
    //                 ? classNames({
    //                     [css.checkedBar4]: true,
    //                     [css.bar]: true,
    //                     [css.bar4]: true,
    //                   })
    //                 : classNames({
    //                     [css.bar]: true,
    //                     [css.bar4]: true,
    //                   })
    //             }
    //           />
    //         </div>
    //       </label>
    //     </div>
    //     <Menu />
    //   </div>
    // );
  }
}
