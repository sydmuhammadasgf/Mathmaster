const fs=require('fs');
const s=fs.readFileSync(__dirname+'/mm-prd.js','utf8');
const checks=[
 ['account-scoped storage key',s.includes("const accountStorageKey=()=>KEY+'_'+(window.__mmAccountKey||'guest')")],
 ['load uses scoped key',/localStorage\.getItem\(accountStorageKey\(\)\)/.test(s)],
 ['save writes scoped key',/localStorage\.setItem\(accountStorageKey\(\),JSON\.stringify\(state\)\)/.test(s)],
 ['legacy global migration limited to guest',/if\(!window\.__mmAccountKey\)\{const legacy=localStorage\.getItem\(KEY\)/.test(s)],
 ['account change reload handler',/window\.addEventListener\('mm-account-changed',reloadAccountState\)/.test(s)],
 ['reload does not capture old chat into new account',/function reloadAccountState\(\)\{state=load\(\)/.test(s)]
];let fail=0;for(const [n,ok] of checks){console.log((ok?'PASS ':'FAIL ')+n);if(!ok)fail++}process.exitCode=fail?1:0;
