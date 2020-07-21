!function(g,q){"use strict";var b="ht",G=b+".layout.",V=g[b]||module.parent.exports.ht,W=V.List,I=V.DataModel,i=V.Node,H=V.Edge,R=V.Group,E=Math,n=E.sqrt,f=E.random,O=E.max,K=E.min,t=function(c){return c*c};V.Default.getInternal().addMSMap({ms_force:function(y){y._interval=50,y._stepCount=10,y._motionLimit=.01,y._edgeRepulsion=.65,y._nodeRepulsion=.65,y._damper=1,y._maxMotion=0,y._motionRatio=0,y.init=function(O){var R=this;O instanceof I?R.dm=O:R.gv=O,R._nodeMap={},R._nodes=new W,R._edges=new W},y.start=function(){var w=this,W=w.gv;if(!w._timer){var V=w.cdm=W?W.dm():w.dm;V.mm(w.handleDataModelChange,w),V.md(w.handleDataPropertyChange,w),W&&W.mp(w.handleGV,w),V.each(function(A){if(w.isVisible(A)&&w.isLayoutable(A)&&A instanceof i)if(w instanceof N){var o=A.p3();A.p3([o[0]+f(),o[1]+f(),o[2]+f()])}else o=A.p(),A.p(o.x+f(),o.y+f())}),w._timer=setInterval(function(){w.relax()},w._interval),w._damper=1}},y.stop=function(){var n=this;n._timer&&(n.cdm.umm(n.handleDataModelChange,n),n.cdm.umd(n.handleDataPropertyChange,n),n.gv&&n.gv.ump(n.handleGV,n),clearInterval(n._timer),delete n._timer,delete n.cdm)},y.handleGV=function(j){var Q=this;if("dataModel"===j.property){var J=j.oldValue,f=j.newValue;J&&(J.umm(Q.handleDataModelChange,Q),J.umd(Q.handleDataPropertyChange,Q)),this.cdm=f,f.mm(Q.handleDataModelChange,Q),f.md(Q.handleDataPropertyChange,Q)}},y.relax=function(){var g=this;if(!(g._damper<.1&&g._maxMotion<g._motionLimit)){this.cdm.each(function(y){g.isVisible(y)&&(y instanceof H?g.addEdge(y):y instanceof i&&g.addNode(y))});for(var Y,h,L=0,Z=g._edges,X=g._nodes,v=X.size();L<g._stepCount;L++){for(Z.each(g.relaxEdge,g),Y=0;v>Y;Y++)for(h=0;v>h;h++)g.relaxNode(X.get(Y),X.get(h));g.moveNode()}g._isAdjusting=1,X.each(function(K){K.fix||(K.p?K.v.p3(K.p):K.v.p(K.x,K.y))}),delete g._isAdjusting,g._nodeMap={},X.clear(),Z.clear(),g.onRelaxed()}},y.onRelaxed=function(){},y.isRunning=function(){return!!this._timer},y.isVisible=function(u){return u.s("layoutable")===!1?!1:this.gv?this.gv.isVisible(u):!0},y.isLayoutable=function(n){if(n.s("layoutable")===!1)return!1;if(n instanceof R)return!1;var a=this;return a.gv?a.gv.isMovable(n)&&!a.gv.isSelected(n):!(a.cdm||a.dm).sm().co(n)},y.getNodeRepulsion=function(){return this._nodeRepulsion},y.setNodeRepulsion=function(a){this._nodeRepulsion=a,this._damper=1},y.getEdgeRepulsion=function(){return this._edgeRepulsion},y.setEdgeRepulsion=function(i){this._edgeRepulsion=i,this._damper=1},y.getStepCount=function(){return this._stepCount},y.setStepCount=function(L){this._stepCount=L,this._damper=1},y.getInterval=function(){return this._interval},y.setInterval=function(t){var W=this;W._interval!==t&&(W._interval=t,W._timer&&(clearInterval(W._timer),W._timer=setInterval(function(){W.relax()},t)))},y.handleDataPropertyChange=function(V){!this._isAdjusting&&this.isVisible(V.data)&&(this._damper=1)},y.handleDataModelChange=function(){this._damper=1},y.damp=function(){var K=this._maxMotion,r=this._damper;this._motionRatio<=.001&&((.2>K||K>1&&.9>r)&&r>.01?this._damper-=.01:.4>K&&r>.003?this._damper-=.003:r>1e-4&&(this._damper-=1e-4)),K<this._motionLimit&&(this._damper=0)}}}),V.layout.ForceLayout=function(j){this.init(j)},V.Default.def(G+"ForceLayout",q,{ms_force:1,getLimitBounds:function(){return this._limitBounds},setLimitBounds:function(a){this._limitBounds=a,this._damper=1},getNodeSize:function(q){var Y=this.gv;return Y&&Y.getDataUIBounds?Y.getDataUIBounds(q):q.getRect()},addNode:function(F){var r=this,Z=r._nodeMap[F._id];if(Z)return Z;var g=F.p();Z={v:F,x:g.x,y:g.y,dx:0,dy:0,fix:!r.isLayoutable(F),s:r.getNodeSize(F)};var R=Z.s,P=n(t(R.width)+t(R.height))*r._nodeRepulsion;return Z.r=1>P?100:P,r._nodeMap[F._id]=Z,r._nodes.add(Z),Z},addEdge:function(w){if(w._40I&&w._41I){var e=this,S=e.addNode(w._40I),f=e.addNode(w._41I),o={s:S,t:f};f=f.s,S=S.s;var O=f.width+S.width,U=f.height+S.height;o.length=n(O*O+U*U)*e._edgeRepulsion,o.length<=0&&(o.length=100),e._edges.add(o)}},relaxEdge:function(A){var Q=A.t,_=A.s,r=Q.x-_.x,P=Q.y-_.y,q=n(r*r+P*P),v=100*A.length,k=.25*r/v*q,o=.25*P/v*q;Q.dx=Q.dx-k,Q.dy=Q.dy-o,_.dx=_.dx+k,_.dy=_.dy+o},relaxNode:function(u,m){if(u!==m){var L=0,X=0,E=u.x-m.x,J=u.y-m.y,S=E*E+J*J;0===S?(L=f(),X=f()):36e4>S&&(L=E/S,X=J/S);var V=u.r*m.r/400;L*=V,X*=V,u.dx+=L,u.dy+=X,m.dx-=L,m.dy-=X}},moveNode:function(){var s=this,S=s._limitBounds,m=s._maxMotion,Q=0,M=s._damper;s._nodes.each(function(p){if(!p.fix){var c=p.dx*M,v=p.dy*M;if(p.dx=c/2,p.dy=v/2,Q=O(n(c*c+v*v),Q),p.x+=O(-40,K(40,c)),p.y+=O(-40,K(40,v)),S){p.x<S.x&&(p.x=S.x,s.adjust(1,0)),p.y<S.y&&(p.y=S.y,s.adjust(0,1));var N=p.s;p.x+N.width>S.x+S.width&&(p.x=S.x+S.width-N.width,s.adjust(-1,0)),p.y+N.height>S.y+S.height&&(p.y=S.y+S.height-N.height,s.adjust(0,-1))}}}),s._maxMotion=Q,s._motionRatio=Q>0?m/Q-1:0,s.damp()},adjust:function(w,y){var V=this._limitBounds;this._nodes.each(function(f){w>0?(!V||f.x+f.s.width+w<V.x+V.width)&&(f.x+=w):(!V||f.x+w>V.x)&&(f.x+=w),y>0?(!V||f.y+f.s.height+y<V.y+V.height)&&(f.y+=y):(!V||f.y+y>V.y)&&(f.y+=y)})}});var N=V.layout.Force3dLayout=function(H){this.init(H)};V.Default.def(G+"Force3dLayout",q,{ms_force:1,getNodeSize3d:function(e){return e.s3()},addNode:function(e){var d=this,O=d._nodeMap[e._id];if(O)return O;O={v:e,p:e.p3(),d:[0,0,0],fix:!d.isLayoutable(e),s:d.getNodeSize3d(e)};var M=O.s,z=V.Default.getDistance(M)*d._nodeRepulsion;return O.r=1>z?100:z,d._nodeMap[e._id]=O,d._nodes.add(O),O},addEdge:function(h){if(h._40I&&h._41I){var g=this,J=g.addNode(h._40I),$=g.addNode(h._41I),b={s:J,t:$};$=$.s,J=J.s,b.length=n(t($[0]+J[0])+t($[1]+J[1])+t($[2]+J[2]))*g._edgeRepulsion,b.length<=0&&(b.length=100),g._edges.add(b)}},relaxEdge:function(I){var V=I.t.p,d=I.s.p,l=I.t.d,b=I.s.d,r=V[0]-d[0],L=V[1]-d[1],a=V[2]-d[2],B=n(r*r+L*L+a*a),u=100*I.length,H=.25*r/u*B,M=.25*L/u*B,N=.25*a/u*B;l[0]-=H,l[1]-=M,l[2]-=N,b[0]+=H,b[1]+=M,b[2]+=N},relaxNode:function(i,O){if(i!==O){var I=i.p,x=O.p,W=0,Q=0,G=0,M=I[0]-x[0],a=I[1]-x[1],Z=I[2]-x[2],j=M*M+a*a+Z*Z;0===j?(W=f(),Q=f(),G=f()):216e6>j&&(W=M/j,Q=a/j,G=Z/j);var P=i.r*O.r/400,o=i.d,z=O.d;W*=P,Q*=P,G*=P,o[0]+=W,o[1]+=Q,o[2]+=G,z[0]-=W,z[1]-=Q,z[2]-=G}},moveNode:function(){var Z=this,c=Z._maxMotion,x=0,d=Z._damper;Z._nodes.each(function(F){if(!F.fix){var J=F.p,p=F.d,o=p[0]*d,g=p[1]*d,G=p[2]*d;p[0]=o/2,p[1]=g/2,p[2]=G/2,x=O(n(o*o+g*g+G*G),x),J[0]+=O(-40,K(40,o)),J[1]+=O(-40,K(40,g)),J[2]+=O(-40,K(40,G))}}),Z._maxMotion=x,Z._motionRatio=x>0?c/x-1:0,Z.damp()}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);