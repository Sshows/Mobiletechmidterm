import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {selectedQuestions,createConfiguredSession} from '../dist/config.mjs';
import {recordAnswer} from '../dist/engine.mjs';
const data=JSON.parse(readFileSync(new URL('../dist/questions.json',import.meta.url),'utf8'));
test('All seven lectures can be selected independently without dropping or duplicating questions',()=>{const ids=[];for(let lecture=1;lecture<=7;lecture++){const qs=selectedQuestions(data,{lectures:[lecture],shuffle:false});assert.ok(qs.length);assert.ok(qs.every(q=>q.lecture===lecture));ids.push(...qs.map(q=>q.id))}assert.equal(ids.length,67);assert.equal(new Set(ids).size,67);const subset=selectedQuestions(data,{lectures:[2,6],shuffle:false});assert.equal(subset.length,20);assert.ok(subset.every(q=>[2,6].includes(q.lecture)))});
test('Unshuffled selection follows sample order and a new session resets answers and pending repeats',()=>{const config={lectures:[1],shuffle:false};const old=createConfiguredSession(data,config);recordAnswer(old,data[0],'1');assert.equal(old.queue.length,10);const fresh=createConfiguredSession(data,config);assert.deepEqual(fresh.queue,selectedQuestions(data,config).map(q=>q.id));assert.equal(fresh.index,0);assert.deepEqual(fresh.answers,[]);assert.equal(fresh.current,null);assert.equal(createConfiguredSession(data,{lectures:[],shuffle:true}),null)});
test('Every question has a concise mnemonic and a valid lecture number',()=>{for(const q of data){assert.ok(q.lecture>=1&&q.lecture<=7);assert.equal(typeof q.mnemonic,'string');assert.ok(q.mnemonic.length>25&&q.mnemonic.length<250)}});
