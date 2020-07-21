!function(p){"use strict";var D="ht",t=p[D],V=Math,Q=V.max,U=V.min,L=V.abs,B=V.atan2,A=(V.cos,V.sin,V.ceil),N=t.Default,d=N.getInternal(),b=t.List,K=d.Mat,s=d.getNodeRect,r=d.intersectionLineRect,l=N.getDistance,j=N.setEdgeType,G="left",J="right",$="top",F="bottom",O="edge.type",S="edge.gap",C="edge.center",f="edge.extend",o=function(H,p){return s(H,p).width},z=function(C,b){return s(C,b).height},Z=function(f,U){return d.getEdgeHostPosition(f,U,"source")},c=function(t,e){return d.getEdgeHostPosition(t,e,"target")},n=function(k,e){var X=k.s(O),G=k.getEdgeGroup();if(G){var m=0;if(G.eachSiblingEdge(function(L){e.isVisible(L)&&L.s(O)==X&&m++}),m>1)return k.s(S)*(m-1)/2}return 0},i=function($,s){var M=$.s(O),j=$.isLooped();if(!$.getEdgeGroup())return j?$.s(S):0;var q,l=0,X=0,i=0;return $.getEdgeGroup().getSiblings().each(function(Y){Y.each(function(T){if(T._40I===$._40I&&T.s(O)==M&&s.isVisible(T)){var D=T.s(S);q?(X+=i/2+D/2,i=D):(q=T,i=D),T===$&&(l=X)}})}),j?X-l+i:l-X/2},M=function(k,t){var $=t.s("edge.corner.radius");return N.toRoundedCorner(k,$)};d.addMethod(t.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),j("boundary",function(q,Q,i,o){o||(Q=-Q);var g,D=Z(i,q),f=c(i,q),V=s(i,q._40I),J=s(i,q._41I),T=new K(B(f.y-D.y,f.x-D.x)),e=l(D,f),y=D.x,R=D.y;return g=T.tf(0,Q),D={x:g.x+y,y:g.y+R},g=T.tf(e,Q),f={x:g.x+y,y:g.y+R},g=r(D,f,V),g&&(D={x:g[0],y:g[1]}),g=r(D,f,J),g&&(f={x:g[0],y:g[1]}),{points:new b([D,f])}}),j("ripple",function(E,R,o,e){e||(R=-R);var P=Z(o,E),$=c(o,E),h=l(P,$),a=U(E.s("edge.offset"),h/2),x=E.s("edge.ripple.size"),u=E.s("edge.ripple.length"),m=E.s("edge.ripple.both"),p=E.s(C),w=E.s("edge.ripple.elevation"),q=new b,L=E.s("edge.ripple.straight")?null:new b,r=new K(B($.y-P.y,$.x-P.x));e||(w=-w),h-=2*a,u>0&&(x=A(h/u));var W=h/x;L&&L.add(1);for(var k=0;x>k;k++)L&&L.add(3),0===k?q.add({x:a+W*k,y:p?0:R}):q.add({x:a+W*k,y:R}),q.add({x:a+W*k+W/2,y:w+R}),m&&(w=-w);for(q.add({x:a+h,y:p?0:R}),k=0;k<q.size();k++){var j=r.tf(q.get(k));j.x+=P.x,j.y+=P.y,q.set(k,j)}return{points:q,segments:L}}),j("h.v",function(j,D,B){D=i(j,B);var S=new b,O=j.s(C),H=Z(B,j),s=H.x,d=H.y,G=c(B,j),l=G.x,K=G.y,x=j._40I instanceof t.Edge,m=j._41I instanceof t.Edge,I=0,g=0,w=l-s,f=K-d;return O||(I=x?0:o(B,j._40I)/2,g=m?0:z(B,j._41I)/2),w>=0&&0>=f?(S.add({x:s+I,y:d+D}),S.add({x:l+D,y:d+D}),S.add({x:l+D,y:K+g})):0>=w&&f>=0?(S.add({x:s-I,y:d+D}),S.add({x:l+D,y:d+D}),S.add({x:l+D,y:K-g})):w>=0&&f>=0?(S.add({x:s+I,y:d+D}),S.add({x:l-D,y:d+D}),S.add({x:l-D,y:K-g})):(S.add({x:s-I,y:d+D}),S.add({x:l-D,y:d+D}),S.add({x:l-D,y:K+g})),M(S,j)}),j("v.h",function(d,Q,a){Q=i(d,a);var g=new b,X=d.s(C),I=Z(a,d),e=I.x,k=I.y,v=c(a,d),N=v.x,s=v.y,$=d._40I instanceof t.Edge,V=d._41I instanceof t.Edge,F=0,K=0,D=N-e,J=s-k;return X||(F=V?0:o(a,d._41I)/2,K=$?0:z(a,d._40I)/2),D>=0&&0>=J?(g.add({x:e+Q,y:k-K}),g.add({x:e+Q,y:s+Q}),g.add({x:N-F,y:s+Q})):0>=D&&J>=0?(g.add({x:e+Q,y:k+K}),g.add({x:e+Q,y:s+Q}),g.add({x:N+F,y:s+Q})):D>=0&&J>=0?(g.add({x:e-Q,y:k+K}),g.add({x:e-Q,y:s+Q}),g.add({x:N-F,y:s+Q})):(g.add({x:e-Q,y:k-K}),g.add({x:e-Q,y:s+Q}),g.add({x:N+F,y:s+Q})),M(g,d)}),j("ortho",function(W,r,u){var A=new b,v=W.s(C),y=W.s("edge.ortho"),X=W._40I,E=W._41I,V=Z(u,W),s=V.x,m=V.y,B=c(u,W),S=B.x,G=B.y,I=S-s,O=G-m,N=X instanceof t.Edge,i=E instanceof t.Edge,w=v||N?0:o(u,X)/2,g=v||N?0:z(u,X)/2,T=v||i?0:o(u,E)/2,K=v||i?0:z(u,E)/2,p=(I-(w+T)*(I>0?1:-1))*y,n=(O-(g+K)*(O>0?1:-1))*y;return L(I)<L(O)?I>=0&&0>=O?(A.add({x:s+r,y:m-g}),A.add({x:s+r,y:m+n+r-g}),A.add({x:S+r,y:m+n+r-g}),A.add({x:S+r,y:G+K})):0>=I&&O>=0?(A.add({x:s+r,y:m+g}),A.add({x:s+r,y:m+n+r+g}),A.add({x:S+r,y:m+n+r+g}),A.add({x:S+r,y:G-K})):I>=0&&O>=0?(A.add({x:s+r,y:m+g}),A.add({x:s+r,y:m+n-r+g}),A.add({x:S+r,y:m+n-r+g}),A.add({x:S+r,y:G-K})):(A.add({x:s+r,y:m-g}),A.add({x:s+r,y:m+n-r-g}),A.add({x:S+r,y:m+n-r-g}),A.add({x:S+r,y:G+K})):I>=0&&0>=O?(A.add({x:s+w,y:m+r}),A.add({x:s+p+r+w,y:m+r}),A.add({x:s+p+r+w,y:G+r}),A.add({x:S-T,y:G+r})):0>=I&&O>=0?(A.add({x:s-w,y:m+r}),A.add({x:s+p+r-w,y:m+r}),A.add({x:s+p+r-w,y:G+r}),A.add({x:S+T,y:G+r})):I>=0&&O>=0?(A.add({x:s+w,y:m+r}),A.add({x:s+p-r+w,y:m+r}),A.add({x:s+p-r+w,y:G+r}),A.add({x:S-T,y:G+r})):(A.add({x:s-w,y:m+r}),A.add({x:s+p-r-w,y:m+r}),A.add({x:s+p-r-w,y:G+r}),A.add({x:S+T,y:G+r})),M(A,W)}),j("flex",function(U,D,P){var E=new b,X=U.s("edge.flex")+n(U,P),k=U.s(C),j=U._40I,G=U._41I,w=Z(P,U),u=w.x,V=w.y,i=c(P,U),H=i.x,T=i.y,K=j instanceof t.Edge,q=G instanceof t.Edge,A=H-u,W=T-V,m=k||K?0:o(P,j)/2,r=k||K?0:z(P,j)/2,N=k||q?0:o(P,G)/2,I=k||q?0:z(P,G)/2,$=A>0?X:-X,O=W>0?X:-X;return L(A)<L(W)?A>=0&&0>=W?(E.add({x:u+D,y:V-r}),E.add({x:u+D,y:V+O+D-r}),E.add({x:H+D,y:T-O+D+I}),E.add({x:H+D,y:T+I})):0>=A&&W>=0?(E.add({x:u+D,y:V+r}),E.add({x:u+D,y:V+O+D+r}),E.add({x:H+D,y:T-O+D-I}),E.add({x:H+D,y:T-I})):A>=0&&W>=0?(E.add({x:u+D,y:V+r}),E.add({x:u+D,y:V+O-D+r}),E.add({x:H+D,y:T-O-D-I}),E.add({x:H+D,y:T-I})):(E.add({x:u+D,y:V-r}),E.add({x:u+D,y:V+O-D-r}),E.add({x:H+D,y:T-O-D+I}),E.add({x:H+D,y:T+I})):A>=0&&0>=W?(E.add({x:u+m,y:V+D}),E.add({x:u+$+D+m,y:V+D}),E.add({x:H-$+D-N,y:T+D}),E.add({x:H-N,y:T+D})):0>=A&&W>=0?(E.add({x:u-m,y:V+D}),E.add({x:u+$+D-m,y:V+D}),E.add({x:H-$+D+N,y:T+D}),E.add({x:H+N,y:T+D})):A>=0&&W>=0?(E.add({x:u+m,y:V+D}),E.add({x:u+$-D+m,y:V+D}),E.add({x:H-$-D-N,y:T+D}),E.add({x:H-N,y:T+D})):(E.add({x:u-m,y:V+D}),E.add({x:u+$-D-m,y:V+D}),E.add({x:H-$-D+N,y:T+D}),E.add({x:H+N,y:T+D})),M(E,U)}),j("extend.east",function(h,$,r){var d=new b,g=h.s(f)+n(h,r),Y=h.s(C),N=Z(r,h),B=h._40I instanceof t.Edge,F=h._41I instanceof t.Edge,j=N.x+(Y||B?0:o(r,h._40I)/2),q=N.y,J=c(r,h),a=J.x+(Y||F?0:o(r,h._41I)/2),_=J.y,w=Q(j,a)+g;return q>_?(d.add({x:j,y:q+$}),d.add({x:w+$,y:q+$}),d.add({x:w+$,y:_-$}),d.add({x:a,y:_-$})):(d.add({x:j,y:q-$}),d.add({x:w+$,y:q-$}),d.add({x:w+$,y:_+$}),d.add({x:a,y:_+$})),M(d,h)}),j("extend.west",function(H,G,a){var g=new b,s=H.s(f)+n(H,a),I=H.s(C),v=H._40I instanceof t.Edge,i=H._41I instanceof t.Edge,h=Z(a,H),Q=h.x-(I||v?0:o(a,H._40I)/2),S=h.y,O=c(a,H),x=O.x-(I||i?0:o(a,H._41I)/2),W=O.y,r=U(Q,x)-s;return S>W?(g.add({x:Q,y:S+G}),g.add({x:r-G,y:S+G}),g.add({x:r-G,y:W-G}),g.add({x:x,y:W-G})):(g.add({x:Q,y:S-G}),g.add({x:r-G,y:S-G}),g.add({x:r-G,y:W+G}),g.add({x:x,y:W+G})),M(g,H)}),j("extend.north",function(i,H,Y){var u=new b,e=i.s(f)+n(i,Y),v=i.s(C),h=i._40I instanceof t.Edge,q=i._41I instanceof t.Edge,T=Z(Y,i),W=T.x,p=T.y-(v||h?0:z(Y,i._40I)/2),_=c(Y,i),x=_.x,G=_.y-(v||q?0:z(Y,i._41I)/2),I=U(p,G)-e;return W>x?(u.add({y:p,x:W+H}),u.add({y:I-H,x:W+H}),u.add({y:I-H,x:x-H}),u.add({y:G,x:x-H})):(u.add({y:p,x:W-H}),u.add({y:I-H,x:W-H}),u.add({y:I-H,x:x+H}),u.add({y:G,x:x+H})),M(u,i)}),j("extend.south",function(K,g,o){var N=new b,S=K.s(f)+n(K,o),e=K.s(C),Y=K._40I instanceof t.Edge,E=K._41I instanceof t.Edge,I=Z(o,K),R=I.x,w=I.y+(e||Y?0:z(o,K._40I)/2),x=c(o,K),P=x.x,T=x.y+(e||E?0:z(o,K._41I)/2),k=Q(w,T)+S;return R>P?(N.add({y:w,x:R+g}),N.add({y:k+g,x:R+g}),N.add({y:k+g,x:P-g}),N.add({y:T,x:P-g})):(N.add({y:w,x:R-g}),N.add({y:k+g,x:R-g}),N.add({y:k+g,x:P+g}),N.add({y:T,x:P+g})),M(N,K)});var w=function(g,H,C,l,p){if(l.sort(function(Y,i){var b=Y.getSourceAgent()===H?Y.getTargetAgent():Y.getSourceAgent(),T=i.getSourceAgent()===H?i.getTargetAgent():i.getSourceAgent(),t=b.p(),d=T.p();if(C===G||C===J){if(t.y>d.y)return 1;if(t.y<d.y)return-1}else{if(t.x>d.x)return 1;if(t.x<d.x)return-1}return N.sortFunc(Y.getId(),i.getId())}),p){for(var I,U,o,a=g.getSourceAgent(),F=g.getTargetAgent(),D=0;D<l.size();D++){var k=l.get(D);k.getSourceAgent()===a&&k.getTargetAgent()===F||k.getTargetAgent()===a&&k.getSourceAgent()===F?(U||(U=new b),U.add(k,0)):U?(o||(o=new b),o.add(k)):(I||(I=new b),I.add(k))}l.clear(),I&&l.addAll(I),U&&l.addAll(U),o&&l.addAll(o)}var n=l.indexOf(g),M=l.size(),v=g.s(S);return{side:C,index:n,size:M,offset:-v*(M-1)/2+v*n}},H=function(G,b,g,K,v){var c=b.s(O);return w(b,g,K,g.getAgentEdges().toList(function(M){return G.isVisible(M)&&M.s(O)===c}),v)},v=function(x,w){var e=x.getSourceAgent()===w?x.getTargetAgent():x.getSourceAgent(),B=w.p(),Z=e.p(),E=Z.x-B.x,b=Z.y-B.y;return E>0&&L(b)<=E?J:0>E&&L(b)<=-E?G:b>0&&L(E)<=b?F:$},m=function(N,h,p){var U=h.s(O),T=v(h,p);return w(h,p,T,p.getAgentEdges().toList(function(n){return N.isVisible(n)&&n.s(O)===U&&v(n,p)===T}))},a=function(L,k){var d=L.getSourceAgent()===k,r=d?L.getTargetAgent():L.getSourceAgent(),S=k.p(),y=r.p();return d?S.y>y.y?$:F:S.x<y.x?J:G},W=function(S,e,y){var k=e.s(O),f=a(e,y);return w(e,y,f,y.getAgentEdges().toList(function(x){return S.isVisible(x)&&x.s(O)===k&&a(x,y)===f}),f===J||f===F)},q=function(u,Q){var E=u.getSourceAgent()===Q,L=E?u.getTargetAgent():u.getSourceAgent(),O=Q.p(),v=L.p();return E?O.x<v.x?J:G:O.y>v.y?$:F},I=function(E,Q,V){var P=Q.s(O),B=q(Q,V);return w(Q,V,B,V.getAgentEdges().toList(function(b){return E.isVisible(b)&&b.s(O)===P&&q(b,V)===B}),B===J||B===F)},P=function(B,K,k){var r=B.getSourceAgent(),g=B.getTargetAgent(),E=r.getId()>g.getId(),N=E?g:r,q=E?r:g,D=N.p(),O=q.p(),c=k(K,B,N),t=k(K,B,q),i=B.s(C),Z=i?0:o(K,N)/2,h=i?0:o(K,q)/2,n=i?0:z(K,N)/2,u=i?0:z(K,q)/2,T=c.offset,a=t.offset,l=c.side,j=t.side,m=new b;return l===$?(m.add({x:D.x+T,y:D.y-n}),m.add({x:D.x+T,y:O.y+a}),j===G?m.add({x:O.x-h,y:O.y+a}):m.add({x:O.x+h,y:O.y+a})):l===F?(m.add({x:D.x+T,y:D.y+n}),m.add({x:D.x+T,y:O.y+a}),j===G?m.add({x:O.x-h,y:O.y+a}):m.add({x:O.x+h,y:O.y+a})):l===G?(m.add({x:D.x-Z,y:D.y+T}),m.add({x:O.x+a,y:D.y+T}),j===F?m.add({x:O.x+a,y:O.y+u}):m.add({x:O.x+a,y:O.y-u})):l===J&&(m.add({x:D.x+Z,y:D.y+T}),m.add({x:O.x+a,y:D.y+T}),j===F?m.add({x:O.x+a,y:O.y+u}):m.add({x:O.x+a,y:O.y-u})),E&&m.reverse(),M(m,B)};j("ortho2",function(u,A,w){var r,O,j=u.s(C),k=u.s("edge.ortho"),e=u.getSourceAgent(),I=u.getTargetAgent(),W=e.getId()>I.getId(),h=W?I:e,Q=W?e:I,K=h.p(),t=Q.p(),p=m(w,u,h),i=m(w,u,Q),X=j?0:o(w,h)/2,Y=j?0:z(w,h)/2,f=j?0:o(w,Q)/2,P=j?0:z(w,Q)/2,L=new b,x=p.offset,U=i.offset,s=p.side;return s===J?(r=t.y>K.y?-x:x,O=K.x+X+(t.x-f-K.x-X)*k,L.add({x:K.x+X,y:K.y+x}),L.add({x:O+r,y:K.y+x}),L.add({x:O+r,y:t.y+U}),L.add({x:t.x-f,y:t.y+U})):s===G?(r=t.y>K.y?-x:x,O=K.x-X-(K.x-X-t.x-f)*k,L.add({x:K.x-X,y:K.y+x}),L.add({x:O-r,y:K.y+x}),L.add({x:O-r,y:t.y+U}),L.add({x:t.x+f,y:t.y+U})):s===F?(r=t.x>K.x?-x:x,O=K.y+Y+(t.y-P-K.y-Y)*k,L.add({x:K.x+x,y:K.y+Y}),L.add({x:K.x+x,y:O+r}),L.add({x:t.x+U,y:O+r}),L.add({x:t.x+U,y:t.y-P})):s===$&&(r=t.x>K.x?-x:x,O=K.y-Y-(K.y-Y-t.y-P)*k,L.add({x:K.x+x,y:K.y-Y}),L.add({x:K.x+x,y:O-r}),L.add({x:t.x+U,y:O-r}),L.add({x:t.x+U,y:t.y+P})),W&&L.reverse(),M(L,u)},!0),j("flex2",function(O,Q,n){var H,E=O.getSourceAgent(),s=O.getTargetAgent(),P=E.getId()>s.getId(),U=P?s:E,T=P?E:s,B=U.p(),_=T.p(),K=m(n,O,U),p=m(n,O,T),v=O.s(C),Z=O.s("edge.flex")+(K.size-1)/2*O.s(S),X=v?0:o(n,U)/2,k=v?0:z(n,U)/2,x=v?0:o(n,T)/2,N=v?0:z(n,T)/2,q=new b,t=K.offset,A=p.offset,W=K.side;return W===J?(H=_.y>B.y?-t:t,q.add({x:B.x+X,y:B.y+t}),q.add({x:B.x+X+Z+H,y:B.y+t}),q.add({x:_.x-x-Z+H,y:_.y+A}),q.add({x:_.x-x,y:_.y+A})):W===G?(H=_.y>B.y?-t:t,q.add({x:B.x-X,y:B.y+t}),q.add({x:B.x-X-Z-H,y:B.y+t}),q.add({x:_.x+x+Z-H,y:_.y+A}),q.add({x:_.x+x,y:_.y+A})):W===F?(H=_.x>B.x?-t:t,q.add({x:B.x+t,y:B.y+k}),q.add({x:B.x+t,y:B.y+k+Z+H}),q.add({x:_.x+A,y:_.y-N-Z+H}),q.add({x:_.x+A,y:_.y-N})):W===$&&(H=_.x>B.x?-t:t,q.add({x:B.x+t,y:B.y-k}),q.add({x:B.x+t,y:B.y-k-Z-H}),q.add({x:_.x+A,y:_.y+N+Z-H}),q.add({x:_.x+A,y:_.y+N})),P&&q.reverse(),M(q,O)},!0),j("extend.north2",function(r,V,T){var N=r.getSourceAgent(),g=r.getTargetAgent(),o=N.getId()>g.getId(),K=o?g:N,y=o?N:g,x=K.p(),i=y.p(),e=H(T,r,K,$),k=H(T,r,y,$,!0),P=r.s(C),s=P?0:z(T,K)/2,_=P?0:z(T,y)/2,q=e.offset,J=k.offset,B=r.s(f)+(e.size-1)/2*r.s(S),j=U(x.y-s,i.y-_)-B+(x.x<i.x?q:-q),D=new b;return D.add({x:x.x+q,y:x.y-s}),D.add({x:x.x+q,y:j}),D.add({x:i.x+J,y:j}),D.add({x:i.x+J,y:i.y-_}),o&&D.reverse(),M(D,r)},!0),j("extend.south2",function(O,A,V){var o=O.getSourceAgent(),c=O.getTargetAgent(),u=o.getId()>c.getId(),Y=u?c:o,v=u?o:c,x=Y.p(),K=v.p(),$=H(V,O,Y,F),w=H(V,O,v,F,!0),s=O.s(C),d=s?0:z(V,Y)/2,e=s?0:z(V,v)/2,t=$.offset,h=w.offset,n=O.s(f)+($.size-1)/2*O.s(S),B=Q(x.y+d,K.y+e)+n+(x.x>K.x?t:-t),Z=new b;return Z.add({x:x.x+t,y:x.y+d}),Z.add({x:x.x+t,y:B}),Z.add({x:K.x+h,y:B}),Z.add({x:K.x+h,y:K.y+e}),u&&Z.reverse(),M(Z,O)},!0),j("extend.west2",function(n,P,q){var N=n.getSourceAgent(),j=n.getTargetAgent(),K=N.getId()>j.getId(),Q=K?j:N,y=K?N:j,O=Q.p(),k=y.p(),w=H(q,n,Q,$),t=H(q,n,y,$,!0),W=n.s(C),m=W?0:o(q,Q)/2,p=W?0:o(q,y)/2,E=w.offset,a=t.offset,Z=n.s(f)+(w.size-1)/2*n.s(S),V=U(O.x-m,k.x-p)-Z+(O.y<k.y?E:-E),z=new b;return z.add({x:O.x-m,y:O.y+E}),z.add({x:V,y:O.y+E}),z.add({x:V,y:k.y+a}),z.add({x:k.x-p,y:k.y+a}),K&&z.reverse(),M(z,n)},!0),j("extend.east2",function(i,V,g){var l=i.getSourceAgent(),E=i.getTargetAgent(),P=l.getId()>E.getId(),p=P?E:l,w=P?l:E,s=p.p(),d=w.p(),n=H(g,i,p,$),r=H(g,i,w,$,!0),t=i.s(C),U=t?0:o(g,p)/2,T=t?0:o(g,w)/2,F=n.offset,W=r.offset,z=i.s(f)+(n.size-1)/2*i.s(S),I=Q(s.x+U,d.x+T)+z+(s.y>d.y?F:-F),k=new b;return k.add({x:s.x+U,y:s.y+F}),k.add({x:I,y:s.y+F}),k.add({x:I,y:d.y+W}),k.add({x:d.x+T,y:d.y+W}),P&&k.reverse(),M(k,i)},!0),j("v.h2",function(i,_,V){return P(i,V,W)},!0),j("h.v2",function(s,A,h){return P(s,h,I)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);