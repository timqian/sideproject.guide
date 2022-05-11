import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <div class="addthis_inline_follow_toolbox"></div>
    <Script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-627b4d73b9595f5c"></Script>
    </div>
    
}
