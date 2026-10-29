import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const worker = readFileSync(new URL('../src/worker.mjs', import.meta.url), 'utf8');
const begin = worker.indexOf('const PAGE=');
const end = worker.indexOf(';const SYSTEM=', begin);
assert.ok(begin >= 0 && end > begin, 'Worker exportado deve conter PAGE e SYSTEM');
const html = JSON.parse(worker.slice(begin + 'const PAGE='.length, end));

test('cópia preserva a cena original 3D e seus controles', () => {
  for (const id of ['scene', 'world', 'daybtn', 'meetbtn', 'zoomin', 'zoomout', 'resetview']) {
    assert.ok(html.includes('id="'+id+'"'), `controle 3D ausente: ${id}`);
  }
});

test('cópia preserva estrutura de funcionários e jornada', () => {
  for (const id of ['view-team', 'member-list', 'view-journey', 'j-steps', 'view-office']) {
    assert.ok(html.includes('id="'+id+'"'), `componente ausente: ${id}`);
  }
});

test('cópia preserva conexão com banco e IA', () => {
  assert.ok(worker.includes('env.DB'));
  assert.ok(worker.includes('env.AI'));
  assert.ok(worker.includes('async scheduled('));
});

test('o escritório indica que as conexões externas não são automaticamente equivalentes ao ChatGPT', () => {
  assert.ok(worker.includes('connected_chatgpt_only'));
});

test('nenhum evento de implantação é definido neste pacote de teste', () => {
  const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  for (const cmd of Object.values(pkg.scripts || {})) {
    assert.doesNotMatch(cmd, /wrangler\s+deploy|pages\s+deploy|publish/i);
  }
});
