const _0x5b19=['post','statusText','Submit\x20OK\x0a','git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20','error','FTM3\x20-\x2002-Promises','error:\x20','Ejecutando\x20tests...\x0a','status','/result.json','.\x20\x0a','readFileSync','parse','Falló\x20el\x20submit\x0a','RESULTADO:\x20','then','https://proxy.soyhenry.com:3000/submit','child_process','git\x20add\x20.','toLowerCase','pop','application/json','npm\x20run\x20grade','stderr:\x20','exit','git\x20push\x20https://','\x20de\x20','Password:','\x20master','now','catch','numPassedTests','stringify','log','node-fetch','El\x20archivo\x20result.json\x20no\x20existe\x20por\x20lo\x20que\x20se\x20creará\x20uno\x20nuevo','message'];(function(_0x3e50a4,_0x5b19e2){const _0x2d244c=function(_0xe8c393){while(--_0xe8c393){_0x3e50a4['push'](_0x3e50a4['shift']());}};_0x2d244c(++_0x5b19e2);}(_0x5b19,0x87));const _0x2d24=function(_0x3e50a4,_0x5b19e2){_0x3e50a4=_0x3e50a4-0x0;let _0x2d244c=_0x5b19[_0x3e50a4];return _0x2d244c;};const _0x3c88a8=_0x2d24,{exec}=require(_0x3c88a8('0x1e')),fetch=require(_0x3c88a8('0xa'));var prompt=require('prompt-sync')();const fs=require('fs');function ejecutar(_0xe8c393){return new Promise((_0x300f88,_0x1b4761)=>{exec(_0xe8c393,(_0x3bb2a7,_0x454390,_0x4afd39)=>{const _0x5d5959=_0x2d24;if(_0x3bb2a7)return _0x1b4761(_0x5d5959('0x13')+_0x3bb2a7[_0x5d5959('0xc')]);if(_0x4afd39)return _0x300f88(_0x5d5959('0x24')+_0x4afd39);_0x300f88(_0x454390);});});}const resultFile=__dirname+_0x3c88a8('0x16');try{fs['unlinkSync'](resultFile);}catch(_0x460a17){console['log'](_0x3c88a8('0xb'));}console[_0x3c88a8('0x9')](_0x3c88a8('0x14')),exec(_0x3c88a8('0x23'),async(_0x471b3d,_0x504b24,_0x2db995)=>{const _0x449913=_0x3c88a8;let _0x2e8ea5=fs[_0x449913('0x18')](resultFile),_0x823aa8=JSON[_0x449913('0x19')](_0x2e8ea5);const _0x56f974=_0x823aa8[_0x449913('0x7')],_0x411333=_0x823aa8['numTotalTests'];console[_0x449913('0x9')](_0x449913('0x1b')+_0x56f974+_0x449913('0x2')+_0x411333+_0x449913('0x17'));const _0x2fa11c=prompt('Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)\x20')['toLowerCase']();if(_0x2fa11c!=='s')return process[_0x449913('0x0')](0x0);const _0x3ba403=prompt('Usuario\x20de\x20github:')[_0x449913('0x20')](),_0x1c9a27=prompt['hide'](_0x449913('0x3'));let _0x52a462;try{const _0x3845d1=await ejecutar('git\x20config\x20--get\x20remote.origin.url');_0x52a462=_0x3845d1['trim']()['split']('/')[_0x449913('0x21')](),await ejecutar(_0x449913('0x1f')),await ejecutar(_0x449913('0x10')+_0x3ba403+'\x20a\x20las\x20'+Date[_0x449913('0x5')]()+'\x22'),await ejecutar(_0x449913('0x1')+_0x3ba403+':'+_0x1c9a27+'@github.com/'+_0x3ba403+'/'+_0x52a462+_0x449913('0x4'));}catch(_0x44a250){return console[_0x449913('0x11')](_0x44a250),process[_0x449913('0x0')](0x0);}fetch(_0x449913('0x1d'),{'method':_0x449913('0xd'),'headers':{'Content-Type':_0x449913('0x22')},'body':JSON[_0x449913('0x8')]({'github':_0x3ba403,'passed':_0x56f974,'total':_0x411333,'repo':_0x449913('0x12')})})[_0x449913('0x1c')](function(_0x2b32a5){const _0x4f897b=_0x449913;if(_0x2b32a5[_0x4f897b('0x15')]!==0xc8)throw new Error(_0x2b32a5[_0x4f897b('0xe')]);return console[_0x4f897b('0x9')](_0x4f897b('0xf')),process[_0x4f897b('0x0')](0x0);})[_0x449913('0x6')](function(_0x36269c){const _0x619bbb=_0x449913;return console[_0x619bbb('0x11')](_0x36269c),console['log'](_0x619bbb('0x1a')),process[_0x619bbb('0x0')](0x1);});});