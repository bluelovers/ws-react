"use strict";
/**
 * Created by user on 2020/1/16.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const crlf_normalize_1 = require("crlf-normalize");
function createLinkBreak(createElement, Fragment) {
    return ({ children, noBR, onlyBR, ...props }) => {
        if (typeof children !== 'string') {
            throw new TypeError(`current only support string`);
        }
        if (noBR) {
            children = crlf_normalize_1.crlf(children);
        }
        else {
            let i = 0;
            let lines = children.split(crlf_normalize_1.R_CRLF);
            let end = lines.pop();
            children = lines.reduce((a, v) => {
                a.push(createElement(Fragment, {
                    key: i++
                }, v));
                a.push(createElement('br', {
                    key: i++
                }));
                !onlyBR && a.push(createElement(Fragment, {
                    key: i++
                }, crlf_normalize_1.LF));
                return a;
            }, []).concat([createElement(Fragment, null, end)]);
        }
        return createElement(Fragment, props, children);
    };
}
exports.createLinkBreak = createLinkBreak;
exports.default = createLinkBreak;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsbURBQWtEO0FBa0JsRCxTQUFnQixlQUFlLENBQXlCLGFBQTZCLEVBQUUsUUFBUTtJQUU5RixPQUFPLENBQWlFLEVBQ3ZFLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLEdBQUcsS0FBSyxFQUNMLEVBQUUsRUFBRTtRQUVQLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUNoQztZQUNDLE1BQU0sSUFBSSxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtTQUNsRDtRQUVELElBQUksSUFBSSxFQUNSO1lBQ0MsUUFBUSxHQUFHLHFCQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7YUFFRDtZQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVWLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsdUJBQU0sQ0FBQyxDQUFDO1lBRW5DLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV0QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO29CQUM5QixHQUFHLEVBQUUsQ0FBQyxFQUFFO2lCQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7b0JBQzFCLEdBQUcsRUFBRSxDQUFDLEVBQUU7aUJBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO29CQUN6QyxHQUFHLEVBQUUsQ0FBQyxFQUFFO2lCQUNSLEVBQUUsbUJBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRVIsT0FBTyxDQUFDLENBQUE7WUFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBUSxDQUFBO1NBQzFEO1FBRUQsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNoRCxDQUFDLENBQUE7QUFDRixDQUFDO0FBNUNELDBDQTRDQztBQUVELGtCQUFlLGVBQWUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMjAvMS8xNi5cbiAqL1xuXG5pbXBvcnQgeyBjcmxmLCBSX0NSTEYsIExGIH0gZnJvbSAnY3JsZi1ub3JtYWxpemUnO1xuXG5leHBvcnQgdHlwZSBJUHJvcExpa2U8VCA9IGFueT4gPSB7XG5cdGNoaWxkcmVuOiBUXG59IHwge1xuXHRjaGlsZHJlbj86IFRcbn1cblxuZXhwb3J0IHR5cGUgSVdhcnBQcm9wTGlrZTxUPiA9IChUIHwge1xuXHRjaGlsZHJlbj86IHN0cmluZ1xufSkgJiB7XG5cdC8qKlxuXHQgKiBub3QgY29udmVydCBsaW5lYnJlYWsgdG8gPGJyLz5cblx0ICovXG5cdG5vQlI/OiBib29sZWFuLFxuXHRvbmx5QlI/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlua0JyZWFrPFAgZXh0ZW5kcyBJUHJvcExpa2UsIE4+KGNyZWF0ZUVsZW1lbnQ6ICguLi5hcmd2KSA9PiBOLCBGcmFnbWVudClcbntcblx0cmV0dXJuIDxUIGV4dGVuZHMgSVdhcnBQcm9wTGlrZTxQPiA9IElXYXJwUHJvcExpa2U8UD4sIFYgZXh0ZW5kcyBOID0gTj4oe1xuXHRcdGNoaWxkcmVuLFxuXHRcdG5vQlIsXG5cdFx0b25seUJSLFxuXHRcdC4uLnByb3BzXG5cdH06IFQpID0+XG5cdHtcblx0XHRpZiAodHlwZW9mIGNoaWxkcmVuICE9PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBjdXJyZW50IG9ubHkgc3VwcG9ydCBzdHJpbmdgKVxuXHRcdH1cblxuXHRcdGlmIChub0JSKVxuXHRcdHtcblx0XHRcdGNoaWxkcmVuID0gY3JsZihjaGlsZHJlbik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRsZXQgaSA9IDA7XG5cblx0XHRcdGxldCBsaW5lcyA9IGNoaWxkcmVuLnNwbGl0KFJfQ1JMRik7XG5cblx0XHRcdGxldCBlbmQgPSBsaW5lcy5wb3AoKTtcblxuXHRcdFx0Y2hpbGRyZW4gPSBsaW5lcy5yZWR1Y2UoKGEsIHYpID0+IHtcblxuXHRcdFx0XHRhLnB1c2goY3JlYXRlRWxlbWVudChGcmFnbWVudCwge1xuXHRcdFx0XHRcdGtleTogaSsrXG5cdFx0XHRcdH0sIHYpKTtcblx0XHRcdFx0YS5wdXNoKGNyZWF0ZUVsZW1lbnQoJ2JyJywge1xuXHRcdFx0XHRcdGtleTogaSsrXG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0IW9ubHlCUiAmJiBhLnB1c2goY3JlYXRlRWxlbWVudChGcmFnbWVudCwge1xuXHRcdFx0XHRcdGtleTogaSsrXG5cdFx0XHRcdH0sIExGKSk7XG5cblx0XHRcdFx0cmV0dXJuIGFcblx0XHRcdH0sIFtdKS5jb25jYXQoW2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGVuZCldKSBhcyBhbnlcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgcHJvcHMsIGNoaWxkcmVuKVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxpbmtCcmVha1xuIl19