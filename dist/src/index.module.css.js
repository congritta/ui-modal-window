
const digest = '5c2e7e3b38f9e5f9f7d55ec7c65fc853b131f205b6360e03683d603ddbd68325';
const css = `._ModalWindow_1yytu_1 {
  display: flex;;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, .3);
  padding: 100px 0;
  overflow: hidden;
  overscroll-behavior: none;
  backdrop-filter: blur(10px);
  transition: var(--transition-duration);
}

@media(max-width: 680px) {
  ._ModalWindow_1yytu_1 {
    padding: 0
  }
}

@media(prefers-color-scheme: dark) {
  ._ModalWindow_1yytu_1 {
    background: rgba(40, 40, 40, .5);
  }
}

._ModalWindow_1yytu_1[class*="_isScrollable"] {
  overflow: auto;
}

._ModalWindow_1yytu_1:not([class*="_isShown"]) {
  opacity: 0;
  visibility: hidden;
}

._container_1yytu_75 {
  width: 100%;
  margin: auto;
  max-width: 680px;
  background: #fff;
  transition: var(--transition-duration);
}

@media(prefers-color-scheme: dark) {
  ._container_1yytu_75 {
    background: #000;
  }
}

@media(max-width: 680px) {
  ._container_1yytu_75 {
    margin-bottom: 0
  }
}

._container_1yytu_75:not([class*="_isShown"]) {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
}

@media(max-width: 680px) {
  ._container_1yytu_75:not([class*="_isShown"]) {
    transform: translateY(100%);
  }
}

/* Header */

._header_1yytu_143 {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background: #fff;
}

@media(prefers-color-scheme: dark) {
  ._header_1yytu_143 {
    background: #000;
  }
}

@media(max-width: 680px) {
  ._header_1yytu_143 {
    position: sticky;
    top: 0;
  }
}

._headerTitle_1yytu_185 {
  font-weight: bold;
  font-size: 14pt;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media(prefers-color-scheme: dark) {
  ._headerTitle_1yytu_185 {
    color: #fff
  }
}

button._headerCloseButton_1yytu_215 {
  flex-shrink: 0;
  margin-left: auto;
}

._header_1yytu_143, ._contents_1yytu_225 {
  padding: 20px;
}

/* Contents */

._contents_1yytu_225 {
  
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"ModalWindow":"_ModalWindow_1yytu_1","modalWindow":"_ModalWindow_1yytu_1","container":"_container_1yytu_75","header":"_header_1yytu_143","headerTitle":"_headerTitle_1yytu_185","headerCloseButton":"_headerCloseButton_1yytu_215","contents":"_contents_1yytu_225"};
export { css, digest };
  