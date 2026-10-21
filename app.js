const patients = [
  { id: 1, name: "李*宁", gender: "女", age: 4, project: "颅脑CT平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成" },
  { id: 2, name: "钟*仪", gender: "男", age: 66, project: "颅脑CT平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成" },
  { id: 3, name: "华*", gender: "男", age: 71, project: "颅脑CT平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成" },
  { id: 4, name: "吴*根", gender: "男", age: 69, project: "颅脑CT平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成" },
  { id: 5, name: "熊*人", gender: "男", age: 69, project: "颅脑CT平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成" },
  { id: 6, name: "周*清", gender: "女", age: 58, project: "颅脑CT平扫", date: "2026-10-19", source: "住院", status: "AIR已完成" },
  { id: 7, name: "陈*兰", gender: "女", age: 62, project: "颅脑CT平扫", date: "2026-10-19", source: "门诊", status: "AIR已完成" },
  { id: 8, name: "王*安", gender: "男", age: 45, project: "颅脑CT平扫", date: "2026-10-19", source: "急诊", status: "AIR已完成" },
  { id: 9, name: "张*华", gender: "女", age: 73, project: "颅脑CT平扫", date: "2026-10-18", source: "住院", status: "AIR已完成" },
  { id: 10, name: "赵*明", gender: "男", age: 51, project: "颅脑CT平扫", date: "2026-10-18", source: "门诊", status: "AIR已完成" },
  { id: 11, name: "钱*芳", gender: "女", age: 39, project: "颅脑CT平扫", date: "2026-10-18", source: "体检", status: "AIR已完成" },
  { id: 12, name: "孙*国", gender: "男", age: 76, project: "颅脑CT平扫", date: "2026-10-17", source: "急诊", status: "AIR已完成" }
];

const templates = [
  { name: "脑萎缩", finding: "脑沟、脑裂增宽，脑室系统轻度扩大。", diagnosis: "脑萎缩。", source: "个人模板" },
  { name: "白质改变", finding: "双侧脑室旁白质区见斑片状低密度影。", diagnosis: "脑白质改变。", source: "医院公共" },
  { name: "腔隙灶", finding: "基底节区见点片状低密度灶。", diagnosis: "腔隙性脑梗死灶。", source: "个人模板" },
  { name: "血管周围间隙", finding: "基底节区见血管周围间隙增宽。", diagnosis: "血管周围间隙增宽。", source: "AIR默认" },
  { name: "透明隔腔", finding: "透明隔腔可见。", diagnosis: "透明隔腔。", source: "医院公共" },
  { name: "蛛网膜囊肿", finding: "局部蛛网膜下腔增宽，呈脑脊液密度。", diagnosis: "蛛网膜囊肿。", source: "个人模板" },
  { name: "鼻窦炎", finding: "双侧上颌窦黏膜增厚。", diagnosis: "鼻窦炎。", source: "医院公共" },
  { name: "鼻中隔偏曲", finding: "鼻中隔向左偏曲。", diagnosis: "鼻中隔偏曲。", source: "个人模板" },
  { name: "颅骨骨瘤", finding: "颅骨局限性高密度骨性突起。", diagnosis: "颅骨骨瘤。", source: "AIR默认" },
  { name: "鼻窦骨瘤", finding: "鼻窦内见边界清楚的骨性密度影。", diagnosis: "鼻窦骨瘤。", source: "医院公共" },
  { name: "乳突炎", finding: "乳突气房透亮度减低。", diagnosis: "乳突炎。", source: "医院公共" },
  { name: "眶内壁凹陷", finding: "一侧眶内壁局部凹陷。", diagnosis: "眶内壁凹陷。", source: "AIR默认" }
];

const iconPaths = {
  power: '<path d="M12 2v10"/><path d="M6.3 5.3a8 8 0 1 0 11.4 0"/>',
  save: '<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/>',
  diagnose: '<path d="M5 3h12l2 2v16H5z"/><path d="M8 14l3-3 2 2 4-4"/><path d="M9 6h6"/>',
  check: '<circle cx="12" cy="12" r="8"/><path d="m8.5 12 2.3 2.3 4.7-5"/>',
  printer: '<path d="M6 9V3h12v6"/><path d="M6 18H4V10h16v8h-2"/><path d="M7 14h10v7H7z"/>',
  back: '<path d="m9 6-6 6 6 6"/><path d="M3 12h18"/>',
  minus: '<circle cx="12" cy="12" r="8"/><path d="M8 12h8"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  file: '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6M9 16h6"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m5 18 5-5 3 3 2-2 4 4"/>',
  star: '<path d="m12 2.5 3 6.1 6.7 1-4.8 4.7 1.1 6.7-6-3.2L6 21l1.1-6.7-4.8-4.7 6.7-1z"/>',
  brain: '<path d="M9.2 4.1A3 3 0 0 0 4.5 6.6 3.5 3.5 0 0 0 3 13a3 3 0 0 0 3 4.8A3 3 0 0 0 12 17V7a3 3 0 0 0-2.8-2.9Z"/><path d="M14.8 4.1a3 3 0 0 1 4.7 2.5A3.5 3.5 0 0 1 21 13a3 3 0 0 1-3 4.8A3 3 0 0 1 12 17V7a3 3 0 0 1 2.8-2.9Z"/><path d="M8 9a3 3 0 0 0-4 1M16 9a3 3 0 0 1 4 1M8 15a3 3 0 0 1-2 3M16 15a3 3 0 0 0 2 3"/>',
  lungs: '<path d="M12 4v9"/><path d="M10 8c-2 1-4 1-5 4l-2 6c-.5 2 1 3 3 2 3-1 4-4 4-7V8Z"/><path d="M14 8c2 1 4 1 5 4l2 6c.5 2-1 3-3 2-3-1-4-4-4-7V8Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
  undo: '<path d="M9 7 4 12l5 5"/><path d="M5 12h8a6 6 0 0 1 6 6"/>',
  copy: '<rect x="8" y="7" width="11" height="14" rx="1"/><path d="M16 7V3H5v14h3"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  message: '<path d="M4 5h16v12H9l-5 4z"/><path d="M8 9h8M8 13h5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  flag: '<path d="M5 21V4"/><path d="M5 5h12l-2 4 2 4H5"/>',
  plusbox: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/>'
};

const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.file}</svg>`;

const state = {
  selectedPatient: 1,
  selectedLink: 1,
  patientQuery: '',
  templateQuery: '',
  findings: [
    { id: 1, text: "脑沟、脑裂增宽。" },
    { id: 2, text: "中线结构居中。" },
    { id: 3, text: "鼻中隔向左偏曲。" }
  ],
  diagnoses: [
    { id: 1, text: "脑萎缩。" },
    { id: 3, text: "鼻中隔偏曲。" }
  ],
  undoStack: []
};

function tool(label, iconName, blue = false) {
  return `<button class="tool-action ${blue ? 'blue' : ''}" data-generic="${label}">${icon(iconName)}<span>${label}</span></button>`;
}

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <main class="app-shell">
      <aside class="worklist panel" aria-label="检查列表">
        <section class="filters">
          <div class="filter-row two"><div class="select-like">全部 <span>×</span></div><div class="select-like">检查类型</div></div>
          <div class="filter-row three"><div class="select-like">一脉阳...</div><div class="select-like">主院区...</div><div class="select-like">检查室</div></div>
          <div class="filter-row two"><div class="date-like"><span class="calendar-dot"></span>2026-04-23&nbsp; - &nbsp;2026-10-20</div></div>
          <div class="patient-search"><input id="patient-search" aria-label="搜索患者姓名" placeholder="患者姓名" value="${state.patientQuery}"/><button class="primary-mini" id="patient-query-btn">查询</button></div>
        </section>
        <section class="patient-area">
          <div class="table-head"><span>患者信息</span><span>检查项目</span><span>检查</span></div>
          <div class="patient-list" id="patient-list"></div>
        </section>
        <section class="history">
          <div class="history-tabs"><button class="active">历史检查(云)</button><button>同名检查(云)</button></div>
          <div class="history-caption"><span>□ 检查时间</span><span>检查项目</span><span>来源</span><span>检查类型</span><span>操作</span></div>
          <div class="history-empty">暂无数据</div>
        </section>
      </aside>

      <section class="workspace">
        <nav class="pacs-toolbar" aria-label="PACS 工具栏">
          <div class="toolbar-group exit-group">${tool('退出','power',true)}</div>
          <div class="toolbar-group actions">
            ${tool('保存','save',true)}${tool('提交诊断','diagnose',true)}${tool('终审','check')}${tool('终审并打印','printer')}${tool('打印','printer')}${tool('退回','diagnose')}${tool('放弃','minus',true)}${tool('预览','eye',true)}
          </div>
          <div class="toolbar-group tools">
            ${tool('申请单','file',true)}${tool('影像查看','image',true)}${tool('远程会诊','message')}${tool('病理报告','file')}${tool('临床医嘱','diagnose')}${tool('AI 诊断','brain',true)}${tool('检验报告','file')}${tool('电子病历','file',true)}${tool('保存模板','save',true)}
          </div>
        </nav>

        <section class="report-shell">
          <article class="report-main">
            <header class="report-head">
              <div class="report-title"><strong>AIR 报告</strong><span>颅脑 CT 平扫</span></div>
              <div class="head-actions"><button class="btn" id="back-pacs">返回 PACS 编辑</button><button class="btn" id="negative-template">一键阴性模板</button><button class="btn primary" id="quote-pacs">引用到 PACS 报告</button></div>
            </header>

            <div class="specialty-wrap">
              <section class="specialty-panel">
                <h2 class="section-title">AI 专项辅助分析</h2>
                <div class="specialty-cards">
                  <button class="specialty-card active" id="hemorrhage-card"><span class="specialty-icon">${icon('brain')}</span><span><div class="specialty-name">脑出血 AI 辅助诊断</div><div class="specialty-link">查看结果 ›</div></span></button>
                  <button class="specialty-card disabled"><span class="specialty-icon">${icon('brain')}</span><span><div class="specialty-name">颅脑 CTA</div><div class="specialty-muted">预留入口</div></span></button>
                  <button class="specialty-card disabled"><span class="specialty-icon">${icon('lungs')}</span><span><div class="specialty-name">脑 CTP</div><div class="specialty-muted">预留入口</div></span></button>
                </div>
              </section>
            </div>

            <div class="editor-layout">
              <aside class="template-panel">
                <h2 class="section-title">快捷模板</h2>
                <label class="template-search"><input id="template-search" placeholder="搜索模板关键词" value="${state.templateQuery}"/>${icon('search')}</label>
                <div class="template-grid" id="template-grid"></div>
              </aside>
              <section class="editor-panel">
                <div class="report-section"><h3>影像所见</h3><div class="report-box" id="findings-box"></div></div>
                <div class="report-section"><h3>诊断意见</h3><div class="report-box" id="diagnoses-box"></div></div>
              </section>
            </div>

            <footer class="report-footer">
              <div class="footer-left"><button class="footer-btn" id="undo">${icon('undo','sm')}撤销</button><button class="footer-btn" id="original-report">${icon('copy','sm')}查看原始报告</button></div>
              <div class="organize"><button class="btn" id="organize-report">整理报告</button><small>基于当前编辑内容整理报告</small></div>
            </footer>
          </article>
          <aside class="right-rail" aria-label="快捷工具">
            <button class="rail-btn active">${icon('grid')}</button><button class="rail-btn">${icon('message')}</button><button class="rail-btn">${icon('file')}</button><button class="rail-btn">${icon('image')}</button><button class="rail-btn">${icon('list')}</button><button class="rail-btn">${icon('search')}</button><button class="rail-btn">${icon('flag')}</button><button class="rail-btn">${icon('plusbox')}</button>
            <div class="rail-spacer"></div><div class="analysis-success"><span class="success-dot">✓</span><span>分析成功</span></div>
          </aside>
        </section>
      </section>
    </main>`;
  renderPatients();
  renderTemplates();
  renderReport();
  bindEvents();
}

function renderPatients() {
  const q = state.patientQuery.trim().toLowerCase();
  const list = patients.filter(p => !q || p.name.toLowerCase().includes(q) || p.project.toLowerCase().includes(q));
  document.querySelector('#patient-list').innerHTML = list.length ? list.map(p => `
    <div class="patient-row ${p.id === state.selectedPatient ? 'selected' : ''}" data-patient="${p.id}">
      <div><div class="name">${p.name}</div><div class="person-meta"><span class="outpatient">${p.source}</span><span class="gender ${p.gender === '女' ? 'female' : 'male'}">${p.gender} ${p.gender === '女' ? '♀' : '♂'}</span><span>${p.age}岁</span></div></div>
      <div class="exam">${p.project}</div><button class="modality">CT</button>
    </div>`).join('') : '<div class="loading-empty">未找到匹配患者</div>';
  document.querySelectorAll('[data-patient]').forEach(row => row.addEventListener('click', () => {
    saveUndo(); state.selectedPatient = Number(row.dataset.patient); state.selectedLink = 0;
    state.findings = [{ id: 1, text: '脑沟、脑裂增宽。' }, { id: 2, text: '中线结构居中。' }, { id: 3, text: '鼻中隔向左偏曲。' }];
    state.diagnoses = [{ id: 1, text: '脑萎缩。' }, { id: 3, text: '鼻中隔偏曲。' }];
    renderPatients(); renderReport(); toast(`已打开 ${patients.find(p => p.id === state.selectedPatient).name} 的 AIR 报告`);
  }));
}

function renderTemplates() {
  const q = state.templateQuery.trim().toLowerCase();
  const list = templates.filter(t => !q || `${t.name}${t.finding}${t.diagnosis}${t.source}`.toLowerCase().includes(q));
  document.querySelector('#template-grid').innerHTML = list.length ? list.map((t, i) => `<button class="template-btn" data-template="${templates.indexOf(t)}" title="${t.source}：${t.finding} / ${t.diagnosis}"><span>${t.name}</span><span class="plus">＋</span></button>`).join('') : '<div class="loading-empty" style="grid-column:1/-1">未找到模板</div>';
  document.querySelectorAll('[data-template]').forEach(btn => btn.addEventListener('click', () => insertTemplate(Number(btn.dataset.template))));
}

function renderReport() {
  const findingBox = document.querySelector('#findings-box');
  const diagnosisBox = document.querySelector('#diagnoses-box');
  findingBox.innerHTML = state.findings.map(item => reportLine(item, 'finding')).join('');
  diagnosisBox.innerHTML = state.diagnoses.map((item, index) => reportLine(item, 'diagnosis', index)).join('');
  document.querySelectorAll('.report-line').forEach(line => {
    line.addEventListener('click', (event) => {
      if (event.target.closest('.delete-line')) return;
      state.selectedLink = Number(line.dataset.id); renderReport();
    });
    line.addEventListener('input', () => {
      const target = line.dataset.kind === 'finding' ? state.findings : state.diagnoses;
      const item = target.find(i => i.id === Number(line.dataset.id));
      item.text = line.querySelector('.line-text').textContent.trim();
    });
  });
  document.querySelectorAll('.delete-line').forEach(btn => btn.addEventListener('click', (event) => {
    event.stopPropagation(); deleteLine(btn.dataset.kind, Number(btn.dataset.id));
  }));
}

function reportLine(item, kind, index = 0) {
  const number = kind === 'diagnosis' ? `<span class="diagnosis-number">${index + 1}.</span>` : '';
  return `<div class="report-line ${item.id === state.selectedLink ? 'selected' : ''}" data-id="${item.id}" data-kind="${kind}">${number}<span class="line-text" contenteditable="true" spellcheck="false">${item.text}</span><button class="delete-line" data-kind="${kind}" data-id="${item.id}" aria-label="删除该条">×</button></div>`;
}

function saveUndo() {
  state.undoStack.push({ findings: structuredClone(state.findings), diagnoses: structuredClone(state.diagnoses) });
  if (state.undoStack.length > 20) state.undoStack.shift();
}

function insertTemplate(index) {
  const t = templates[index]; saveUndo();
  const nextId = Math.max(0, ...state.findings.map(i => i.id), ...state.diagnoses.map(i => i.id)) + 1;
  state.findings.push({ id: nextId, text: t.finding });
  state.diagnoses.push({ id: nextId, text: t.diagnosis });
  state.selectedLink = nextId; renderReport(); toast(`已插入“${t.name}” · ${t.source}`);
}

function deleteLine(kind, id) {
  saveUndo();
  if (kind === 'finding') {
    state.findings = state.findings.filter(i => i.id !== id);
    state.diagnoses = state.diagnoses.filter(i => i.id !== id);
    toast('已删除影像所见及明确关联的诊断意见');
  } else {
    state.diagnoses = state.diagnoses.filter(i => i.id !== id);
    toast('已删除诊断意见，关联影像所见已保留');
  }
  state.selectedLink = 0; renderReport();
}

function bindEvents() {
  document.querySelector('#patient-query-btn').addEventListener('click', () => {
    state.patientQuery = document.querySelector('#patient-search').value; renderPatients();
  });
  document.querySelector('#patient-search').addEventListener('keydown', e => { if (e.key === 'Enter') { state.patientQuery = e.target.value; renderPatients(); } });
  document.querySelector('#template-search').addEventListener('input', e => { state.templateQuery = e.target.value; renderTemplates(); });
  document.querySelector('#negative-template').addEventListener('click', () => {
    saveUndo(); state.findings = [{ id: 101, text: '颅脑形态正常，脑实质未见明显异常密度影，中线结构居中。' }];
    state.diagnoses = [{ id: 101, text: '颅脑 CT 平扫未见明显异常。' }]; state.selectedLink = 101; renderReport(); toast('已替换为本院颅脑 CT 阴性模板，可继续编辑');
  });
  document.querySelector('#undo').addEventListener('click', () => {
    const snapshot = state.undoStack.pop(); if (!snapshot) return toast('暂无可撤销的操作');
    state.findings = snapshot.findings; state.diagnoses = snapshot.diagnoses; state.selectedLink = 0; renderReport(); toast('已撤销上一步操作');
  });
  document.querySelector('#original-report').addEventListener('click', () => openModal('模型原始报告', '影像所见\n脑沟、脑裂增宽。中线结构居中。鼻中隔向左偏曲。\n\n诊断意见\n1. 脑萎缩。\n2. 鼻中隔偏曲。'));
  document.querySelector('#organize-report').addEventListener('click', organizeReport);
  document.querySelector('#back-pacs').addEventListener('click', () => toast('AIR 工作草稿已暂存，已返回 PACS 编辑'));
  document.querySelector('#quote-pacs').addEventListener('click', () => openModal('引用到 PACS 报告', '将用当前 AIR 编辑稿替换 PACS 中的影像所见和诊断意见。\n\n引用仅写入编辑框，不会自动发布正式报告。', true));
  document.querySelector('#hemorrhage-card').addEventListener('click', () => openModal('脑出血 AI 辅助诊断', '本次检查未检出明确颅内出血征象。\n\n演示说明：进入专项分析前，当前 AIR 草稿已自动暂存。'));
  document.querySelectorAll('[data-generic]').forEach(btn => btn.addEventListener('click', () => toast(`${btn.dataset.generic}：演示操作已响应`)));
  document.querySelectorAll('.rail-btn').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }));
}

function organizeReport() {
  saveUndo();
  const seen = new Set();
  state.findings = state.findings.filter(item => { const normalized = item.text.replace(/\s/g,''); if (seen.has(normalized)) return false; seen.add(normalized); return true; });
  state.findings = state.findings.map(item => ({ ...item, text: /[。；]$/.test(item.text) ? item.text : `${item.text}。` }));
  state.diagnoses = state.diagnoses.map(item => ({ ...item, text: /[。；]$/.test(item.text) ? item.text : `${item.text}。` }));
  state.selectedLink = 0; renderReport(); toast('报告已基于当前编辑内容完成整理，可撤销');
}

let toastTimer;
function toast(message) {
  const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

function openModal(title, content, confirm = false) {
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true"><div class="modal-head"><span>${title}</span><button class="modal-close" aria-label="关闭">×</button></div><div class="modal-body">${content}</div><div class="modal-actions"><button class="btn modal-cancel">${confirm ? '取消' : '关闭'}</button>${confirm ? '<button class="btn primary modal-confirm">确认引用</button>' : ''}</div></section></div>`;
  const close = () => document.querySelector('#modal-root').innerHTML = '';
  document.querySelector('.modal-close').addEventListener('click', close); document.querySelector('.modal-cancel').addEventListener('click', close);
  document.querySelector('.modal-backdrop').addEventListener('click', e => { if (e.target.classList.contains('modal-backdrop')) close(); });
  if (confirm) document.querySelector('.modal-confirm').addEventListener('click', () => { close(); toast('已引用到 PACS 报告编辑框，请继续确认并发布'); });
}

renderApp();
