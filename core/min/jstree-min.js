function TreeNode(t){"use strict";this.level=0,this.children=[],this.parent=void 0,this.content=new ContentItem(t,this)}TreeNode.prototype.addChild=function(t){"use strict";DEBUG_PRINTJSON||(t.parent=this),t.level=this.level+1,this.children.push(t)},TreeNode.prototype.print=function(t){"use strict";var e,i;for(void 0===t&&(t="<div id='var_dump'>",e=!0),t+=this.content.printOpening(),i=0;i<this.children.length;)t=this.children[i].print(t),i++;return t+=this.content.printClosing(),e&&(t+="</div>"),t};