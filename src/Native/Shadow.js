Elm.Native.Shadow = {};

Elm.Native.Shadow.make = function (localRuntime) {
  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Shadow = localRuntime.Native.Shadow || {};

  if (Elm.Native.Shadow.values) {
    return localRuntime.Native.Shadow.values = Elm.Native.Shadow.values;
  }

  var VirtualDom = Elm.Native.VirtualDom.make(localRuntime);
  var List = Elm.Native.List.make(localRuntime);

  function ShadowHost(host, contents) {
    this.type = 'Widget';
    this.contents = contents;
    this.host = host;
  }

  ShadowHost.prototype.init = function () {
    var hostEl = VirtualDom.render(this.host);
    var root = hostEl.createShadowRoot();
    var contents = renderContents(this.contents);
    root.appendChild(contents);
    return hostEl;
  };

  ShadowHost.prototype.update = function (previous, node) {
    var oldModel = wrapContents(previous.contents);
    var newModel = wrapContents(this.contents);
    VirtualDom.updateAndReplace(node, previous.host, node.host);
    VirtualDom.updateAndReplace(node.shadowRoot.firstChild, oldModel, newModel);
    return node;
  };

  function renderContents(contents) {
    var container = wrapContents(contents);
    var el = VirtualDom.render(container);
    var frag = document.createDocumentFragment();
    [].forEach.call(el.childNodes, function (child) {
      frag.appendChild(el);
    });
    return frag;
  }

  function wrapContents(contents) {
    var attrs = List.fromArray([]);
    var container = A3(VirtualDom.node, 'div', attrs, contents);
    return container;
  }

  function shadow(host, contents) {
    return new ShadowHost(host, contents);
  }

  return localRuntime.Native.Shadow.values = Elm.Native.Shadow.values = {
    shadow: F2(shadow)
  };
};
