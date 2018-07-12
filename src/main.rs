extern crate web_view;

use web_view::*;

fn main() {
  let size = (1100, 730);
  let resizable = true;
  let debug = true;
  let init_cb = |webview: MyUnique<WebView<_>>| {
    webview.dispatch(|wv, _| wv.set_color(0x2F, 0x34, 0x3F, 0xFF));
  };
  let frontend_cb = |_webview: &mut _, _arg: &_, _userdata: &mut _| {};
  let userdata = ();
  run(
    "Tupelo",
    Content::Url("http://localhost:8080/"),
    Some(size),
    resizable,
    debug,
    init_cb,
    frontend_cb,
    userdata
  );
}
