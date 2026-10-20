import {createSession} from './engine.mjs';
export const ALL_LECTURES=[1,2,3,4,5,6,7];
export function normalizeConfig(config){return {lectures:Array.isArray(config?.lectures)?ALL_LECTURES.filter(n=>config.lectures.includes(n)):[...ALL_LECTURES],shuffle:typeof config?.shuffle==='boolean'?config.shuffle:true}}
export function selectedQuestions(data,config){const selected=normalizeConfig(config);return data.filter(q=>selected.lectures.includes(q.lecture))}
export function createConfiguredSession(data,config){const selected=normalizeConfig(config);const questions=selectedQuestions(data,selected);if(!questions.length)return null;return {...createSession(questions.map(q=>q.id),{mode:'practice',random:selected.shuffle}),config:selected}}
