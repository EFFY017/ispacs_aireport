const patients = [
  { id: 1, name: "李*宁", gender: "女", age: 4, project: "头胸CT联合平扫", date: "2026-10-20", source: "门诊", status: "AIR已完成", airModels: ["brain", "chest"] },
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

const templateLibraries = {
  air: templates.map(template => ({ ...template, source: 'AIR 模板' })),
  personal: [
    { name: '儿童颅脑未见异常', finding: '双侧大脑半球对称，脑实质未见明显异常密度影，脑室系统形态正常。', diagnosis: '儿童颅脑 CT 平扫未见明显异常。', source: '个人模板' },
    { name: '老年性脑萎缩', finding: '脑沟、脑裂增宽，脑室系统对称性扩大，中线结构居中。', diagnosis: '老年性脑萎缩。', source: '个人模板' },
    { name: '多发腔隙灶', finding: '双侧基底节区及放射冠见多发点片状低密度灶。', diagnosis: '双侧多发腔隙性脑梗死灶。', source: '个人模板' },
    { name: '陈旧性脑梗死', finding: '脑实质内见片状低密度影，边界清楚，邻近脑沟增宽。', diagnosis: '陈旧性脑梗死。', source: '个人模板' },
    { name: '鼻窦炎伴积液', finding: '鼻窦黏膜增厚，窦腔内见液平。', diagnosis: '鼻窦炎伴积液。', source: '个人模板' },
    { name: '颅骨术后改变', finding: '颅骨局部骨质缺损，可见术后内固定影。', diagnosis: '颅骨术后改变。', source: '个人模板' },
    { name: '透明隔腔', finding: '透明隔腔可见，脑室系统未见明显扩张。', diagnosis: '透明隔腔。', source: '个人模板' },
    { name: '双侧乳突炎', finding: '双侧乳突气房透亮度减低，部分气房内见软组织密度影。', diagnosis: '双侧乳突炎。', source: '个人模板' }
  ],
  public: [
    { name: '颅脑 CT 平扫正常', finding: '脑实质密度均匀，脑室系统形态正常，中线结构居中。', diagnosis: '颅脑 CT 平扫未见明显异常。', source: '公共模板' },
    { name: '脑出血', finding: '脑实质内见高密度影，周围可见低密度水肿带。', diagnosis: '脑出血。', source: '公共模板' },
    { name: '蛛网膜下腔出血', finding: '脑沟及脑池内见条片状高密度影。', diagnosis: '蛛网膜下腔出血。', source: '公共模板' },
    { name: '硬膜下血肿', finding: '颅板下见新月形高密度影，邻近脑组织受压。', diagnosis: '硬膜下血肿。', source: '公共模板' },
    { name: '脑梗死', finding: '脑实质内见片状低密度影，局部灰白质界限欠清。', diagnosis: '脑梗死。', source: '公共模板' },
    { name: '脑白质疏松', finding: '双侧脑室旁白质区见对称性斑片状低密度影。', diagnosis: '脑白质疏松。', source: '公共模板' },
    { name: '蛛网膜囊肿', finding: '局部蛛网膜下腔增宽，呈脑脊液密度。', diagnosis: '蛛网膜囊肿。', source: '公共模板' },
    { name: '颅内钙化', finding: '颅内见点状或结节状高密度钙化影。', diagnosis: '颅内钙化。', source: '公共模板' },
    { name: '颅骨骨折', finding: '颅骨骨质连续性中断，可见线样透亮影。', diagnosis: '颅骨骨折。', source: '公共模板' },
    { name: '副鼻窦炎', finding: '副鼻窦黏膜增厚，窦腔透亮度减低。', diagnosis: '副鼻窦炎。', source: '公共模板' },
    { name: '鼻中隔偏曲', finding: '鼻中隔偏向一侧，双侧鼻腔不对称。', diagnosis: '鼻中隔偏曲。', source: '公共模板' },
    { name: '乳突炎', finding: '乳突气房透亮度减低，部分气房融合。', diagnosis: '乳突炎。', source: '公共模板' }
  ]
};

const pacsTemplates = [
  "颅脑CT平扫未见异常", "脑萎缩", "脑白质改变", "腔隙性脑梗死灶", "陈旧性脑梗死",
  "脑出血", "硬膜下血肿", "蛛网膜下腔出血", "透明隔腔", "蛛网膜囊肿",
  "鼻窦炎", "鼻中隔偏曲", "颅骨骨瘤", "乳突炎", "颅内钙化"
];

const airCaseReports = {
  1: {
    findings: [{ id: 1, text: "脑沟、脑裂增宽。" }, { id: 2, text: "中线结构居中。" }, { id: 3, text: "鼻中隔向左偏曲。" }],
    diagnoses: [{ id: 1, text: "脑萎缩。" }, { id: 3, text: "鼻中隔偏曲。" }]
  },
  2: {
    findings: [{ id: 1, text: "双侧半卵圆中心及脑室旁白质见斑片状低密度影。" }, { id: 2, text: "脑沟、脑裂稍增宽，脑室系统轻度扩大。" }, { id: 3, text: "双侧筛窦黏膜增厚。" }],
    diagnoses: [{ id: 1, text: "脑白质改变。" }, { id: 2, text: "轻度脑萎缩。" }, { id: 3, text: "双侧筛窦炎。" }]
  },
  3: {
    findings: [{ id: 1, text: "双侧大脑半球对称，脑实质未见明显异常密度影。" }, { id: 2, text: "脑室系统形态、大小正常，中线结构居中。" }, { id: 3, text: "颅骨骨质未见明显异常。" }],
    diagnoses: [{ id: 1, text: "颅脑 CT 平扫未见明显异常。" }]
  },
  4: {
    findings: [{ id: 1, text: "左侧基底节区见点状低密度灶，边界尚清。" }, { id: 2, text: "双侧脑室旁白质密度稍减低。" }, { id: 3, text: "中线结构居中。" }],
    diagnoses: [{ id: 1, text: "左侧基底节区腔隙性脑梗死灶。" }, { id: 2, text: "轻度脑白质改变。" }]
  },
  5: {
    findings: [{ id: 1, text: "右侧基底节区见片状低密度影，边缘清晰。" }, { id: 2, text: "脑沟、脑裂增宽，侧脑室稍扩大。" }, { id: 3, text: "右侧上颌窦内见囊状软组织密度影。" }],
    diagnoses: [{ id: 1, text: "右侧基底节区陈旧性脑梗死。" }, { id: 2, text: "脑萎缩。" }, { id: 3, text: "右侧上颌窦黏膜下囊肿。" }]
  },
  6: {
    findings: [{ id: 1, text: "左侧丘脑见类圆形高密度影，周围轻度低密度水肿。" }, { id: 2, text: "邻近侧脑室轻度受压，中线结构居中。" }, { id: 3, text: "余脑实质未见明显异常密度影。" }],
    diagnoses: [{ id: 1, text: "左侧丘脑出血。" }]
  },
  7: {
    findings: [{ id: 1, text: "左侧颞极蛛网膜下腔局限性增宽，呈脑脊液密度。" }, { id: 2, text: "邻近脑实质轻度受压。" }, { id: 3, text: "脑室系统形态、大小正常。" }],
    diagnoses: [{ id: 1, text: "左侧颞极蛛网膜囊肿。" }]
  },
  8: {
    findings: [{ id: 1, text: "双侧基底节区见多发点状脑脊液样低密度影。" }, { id: 2, text: "脑实质内未见急性出血征象。" }, { id: 3, text: "鼻中隔向右偏曲。" }],
    diagnoses: [{ id: 1, text: "双侧基底节区血管周围间隙增宽。" }, { id: 3, text: "鼻中隔右偏。" }]
  },
  9: {
    findings: [{ id: 1, text: "双侧苍白球区见对称性点状钙化。" }, { id: 2, text: "松果体区见小点状钙化。" }, { id: 3, text: "脑室系统及中线结构未见异常。" }],
    diagnoses: [{ id: 1, text: "双侧苍白球及松果体生理性钙化。" }]
  },
  10: {
    findings: [{ id: 1, text: "透明隔腔及第五脑室形成。" }, { id: 2, text: "双侧大脑半球脑实质密度均匀。" }, { id: 3, text: "中线结构居中。" }],
    diagnoses: [{ id: 1, text: "透明隔腔及第五脑室。" }]
  },
  11: {
    findings: [{ id: 1, text: "左侧蝶窦内见软组织密度影伴少量气泡。" }, { id: 2, text: "双侧乳突气房透亮度良好。" }, { id: 3, text: "颅内未见明显异常密度影。" }],
    diagnoses: [{ id: 1, text: "左侧蝶窦炎。" }, { id: 3, text: "颅内未见明显异常。" }]
  },
  12: {
    findings: [{ id: 1, text: "右侧额颞顶部颅板下见新月形脑脊液样低密度影。" }, { id: 2, text: "右侧额叶脑沟稍受压，中线结构无明显偏移。" }, { id: 3, text: "脑实质未见急性出血征象。" }],
    diagnoses: [{ id: 1, text: "右侧额颞顶部硬膜下积液。" }]
  }
};

const chestCaseReports = {
  1: {
    findings: [
      { id: 201, text: '胸廓对称，双肺纹理清晰。' },
      { id: 202, text: '双肺未见明确实性结节及活动性病变。' },
      { id: 203, text: '纵隔居中，未见明显肿大淋巴结。' }
    ],
    diagnoses: [{ id: 201, text: '胸部 CT 平扫未见明显异常。' }]
  }
};

const airModelCatalog = {
  brain: { label: '颅脑CT平扫AIR 基础模型', title: '颅脑 CT 平扫' },
  chest: { label: '胸部CT平扫AIR 基础模型', title: '胸部 CT 平扫' }
};

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
  currentView: 'air',
  selectedPatient: 1,
  selectedLink: 1,
  patientQuery: '',
  templateQuery: '',
  templateTab: 'air',
  findings: structuredClone(airCaseReports[1].findings),
  diagnoses: structuredClone(airCaseReports[1].diagnoses),
  undoStack: [],
  redoStack: [],
  pacsDrafts: {},
  airDrafts: {},
  airModelByPatient: { 1: 'brain' },
  generationStatus: { '11:brain': 'failed' },
  generationCount: {}
};

function availableAirModels(patientId = state.selectedPatient) {
  return patients.find(patient => patient.id === patientId)?.airModels || ['brain'];
}

function currentAirModel(patientId = state.selectedPatient) {
  const available = availableAirModels(patientId);
  const selected = state.airModelByPatient[patientId] || available[0];
  return available.includes(selected) ? selected : available[0];
}

function airReportKey(patientId = state.selectedPatient, model = currentAirModel(patientId)) {
  return `${patientId}:${model}`;
}

function originalAirReport(patientId = state.selectedPatient, model = currentAirModel(patientId)) {
  if (model === 'chest') return chestCaseReports[patientId] || chestCaseReports[1];
  return airCaseReports[patientId] || airCaseReports[1];
}

function persistCurrentAirDraft() {
  state.airDrafts[airReportKey()] = {
    findings: structuredClone(state.findings),
    diagnoses: structuredClone(state.diagnoses)
  };
}

function loadAirDraft(patientId) {
  const model = currentAirModel(patientId);
  const source = state.airDrafts[airReportKey(patientId, model)] || originalAirReport(patientId, model);
  state.findings = structuredClone(source.findings);
  state.diagnoses = structuredClone(source.diagnoses);
  state.selectedLink = state.findings[0]?.id || 0;
  state.undoStack = [];
  state.redoStack = [];
}

function tool(label, iconName, blue = false) {
  return `<button class="tool-action ${blue ? 'blue' : ''}" data-generic="${label}">${icon(iconName)}<span>${label}</span></button>`;
}

function airViewMarkup() {
  const modelKey = currentAirModel();
  const model = airModelCatalog[modelKey];
  const modelOptions = availableAirModels();
  const modelSelector = modelOptions.length > 1 ? `<details class="air-model-switch">
    <summary aria-label="切换 AIR 模型"><span><i>模型：</i>${model.label}</span><span class="model-caret">⌄</span></summary>
    <div class="air-model-menu" role="menu">${modelOptions.map(key => `<button class="${key === modelKey ? 'active' : ''}" role="menuitem" data-air-model="${key}"><span>${airModelCatalog[key].label}</span>${key === modelKey ? '<b>✓</b>' : ''}</button>`).join('')}</div>
  </details>` : `<span class="report-exam-name">${model.title}</span>`;
  const specialtyCards = modelKey === 'chest' ? `
    <button class="specialty-card active" id="specialty-primary"><span class="specialty-icon">${icon('lungs')}</span><span><div class="specialty-name">肺结节 AI 辅助诊断</div><div class="specialty-link">查看结果 ›</div></span></button>
    <button class="specialty-card disabled"><span class="specialty-icon">${icon('lungs')}</span><span><div class="specialty-name">肺炎 AI 辅助诊断</div><div class="specialty-muted">预留入口</div></span></button>
    <button class="specialty-card disabled"><span class="specialty-icon">${icon('image')}</span><span><div class="specialty-name">胸部骨折 AI 辅助诊断</div><div class="specialty-muted">预留入口</div></span></button>` : `
    <button class="specialty-card active" id="specialty-primary"><span class="specialty-icon">${icon('brain')}</span><span><div class="specialty-name">脑出血 AI 辅助诊断</div><div class="specialty-link">查看结果 ›</div></span></button>
    <button class="specialty-card disabled"><span class="specialty-icon">${icon('brain')}</span><span><div class="specialty-name">颅脑 CTA</div><div class="specialty-muted">预留入口</div></span></button>
    <button class="specialty-card disabled"><span class="specialty-icon">${icon('lungs')}</span><span><div class="specialty-name">脑 CTP</div><div class="specialty-muted">预留入口</div></span></button>`;
  const generationStatus = state.generationStatus[airReportKey()] || 'ready';
  const generationLabel = generationStatus === 'failed' ? '重试生成' : generationStatus === 'generating' ? '生成中…' : '重新生成';
  const reportEditor = generationStatus === 'ready' ? `
    <div class="report-section"><h3>影像所见</h3><div class="report-box" id="findings-box"></div></div>
    <div class="report-section"><h3>诊断意见</h3><div class="report-box" id="diagnoses-box"></div></div>` : `
    <div class="generation-state ${generationStatus}" role="status">
      <span class="generation-mark">${generationStatus === 'failed' ? '!' : '···'}</span>
      <h3>${generationStatus === 'failed' ? 'AIR 报告生成失败' : 'AIR 报告生成中'}</h3>
      <p>${generationStatus === 'failed' ? '本次生成未成功，不影响 PACS 原报告编辑。可点击下方按钮重新生成。' : '正在基于当前检查重新生成报告，请稍候…'}</p>
      ${generationStatus === 'failed' ? '<button class="btn primary" id="retry-generation">重试生成</button>' : ''}
    </div>`;
  return `<section class="report-shell">
    <article class="report-main">
      <header class="report-head">
        <div class="report-title"><strong>AIR 报告</strong>${modelSelector}</div>
        <div class="head-actions"><button class="btn" id="back-pacs">返回 PACS 编辑</button><button class="btn" id="negative-template" ${generationStatus !== 'ready' ? 'disabled' : ''}>一键阴性模板</button><button class="btn primary" id="quote-pacs" ${generationStatus !== 'ready' ? 'disabled' : ''}>引用到 PACS 报告</button></div>
      </header>
      <div class="specialty-wrap">
        <section class="specialty-panel">
          <h2 class="section-title">AI 专项辅助分析</h2>
          <div class="specialty-cards">
            ${specialtyCards}
          </div>
        </section>
      </div>
      <div class="editor-layout">
        <aside class="template-panel">
          <h2 class="section-title">快捷模板</h2>
          <div class="template-tabs" role="tablist" aria-label="快捷模板分类">
            <button class="${state.templateTab === 'air' ? 'active' : ''}" role="tab" aria-selected="${state.templateTab === 'air'}" data-template-tab="air">AIR 模板</button>
            <button class="${state.templateTab === 'personal' ? 'active' : ''}" role="tab" aria-selected="${state.templateTab === 'personal'}" data-template-tab="personal">个人模板</button>
            <button class="${state.templateTab === 'public' ? 'active' : ''}" role="tab" aria-selected="${state.templateTab === 'public'}" data-template-tab="public">公共模板</button>
          </div>
          <label class="template-search"><input id="template-search" placeholder="搜索当前模板" value="${state.templateQuery}"/>${icon('search')}</label>
          <div class="template-grid" id="template-grid"></div>
        </aside>
        <section class="editor-panel ${generationStatus !== 'ready' ? 'generation-mode' : ''}">
          ${reportEditor}
        </section>
      </div>
      <footer class="report-footer">
        <div class="footer-left"><button class="footer-btn" id="undo">${icon('undo','sm')}撤销</button><button class="footer-btn" id="redo">${icon('undo','sm')}重做</button><button class="footer-btn" id="original-report">${icon('copy','sm')}查看原始报告</button></div>
        <div class="footer-right"><button class="footer-btn regenerate" id="regenerate-report" ${generationStatus === 'generating' ? 'disabled' : ''}>${generationLabel}</button><div class="organize"><button class="btn" id="organize-report" ${generationStatus !== 'ready' ? 'disabled' : ''}>整理报告</button><small>基于当前编辑内容整理报告</small></div></div>
      </footer>
    </article>
    ${rightRailMarkup(false)}
  </section>`;
}

function getPacsDraft() {
  if (!state.pacsDrafts[state.selectedPatient]) {
    state.pacsDrafts[state.selectedPatient] = {
      findings: '双侧大脑半球对称，脑实质未见明显异常密度影。脑室系统形态、大小正常，中线结构居中。',
      diagnosis: '颅脑 CT 平扫未见明显异常。',
      imported: false
    };
  }
  return state.pacsDrafts[state.selectedPatient];
}

function pacsViewMarkup() {
  const patient = patients.find(p => p.id === state.selectedPatient);
  const draft = getPacsDraft();
  return `<section class="pacs-shell">
    <article class="pacs-report panel">
      <div class="pacs-report-scroll">
        <header class="pacs-document-head">
          <div class="pacs-status"><span>诊断中</span><div class="select-like">请选择</div></div>
          <h1>放射检查报告单</h1><div class="ct-mark">CT</div>
        </header>
        <section class="patient-summary">
          <div>姓名: <strong>${patient.name}</strong></div><div>性别: ${patient.gender}&nbsp;&nbsp; 年龄: ${patient.age}岁</div><div>检查号: R260813${String(patient.id).padStart(4,'0')}</div>
          <div>检查部位: 颅脑</div><div>检查项目: * CT颅脑(平扫)</div><button title="编辑患者信息">${icon('diagnose','sm')}</button>
        </section>
        <section class="pacs-field findings-field">
          <div class="pacs-label"><span><b>*</b> 影像所见</span><div class="text-tools"><button title="撤销">↶</button><button>A+</button><button>A-</button><span>18px</span></div></div>
          <div class="textarea-wrap"><textarea id="pacs-findings" spellcheck="false">${draft.findings}</textarea><span class="mic">◉</span></div>
        </section>
        <section class="pacs-field diagnosis-field">
          <div class="pacs-label"><span><b>*</b> 诊断意见</span><span class="ordered-icon">☷</span></div>
          <div class="textarea-wrap"><textarea id="pacs-diagnosis" spellcheck="false">${draft.diagnosis}</textarea><span class="mic">◉</span></div>
        </section>
        <section class="pacs-options">
          <label><b>*</b> 危急值: <span class="radio active"></span><em>不上报</em><span class="radio"></span>上报</label>
          <label><b>*</b> HP: <span class="radio active"></span><em>阴性(-)</em><span class="radio"></span>阳性(+)</label>
          <label>片序: <input /></label><label><b>*</b> 模板: <span class="select-like pacs-select">放射模板</span></label>
          <div>诊断医生: <strong>中心管理员</strong></div><div>诊断时间: <strong>2026-10-21 14:35</strong></div>
        </section>
      </div>
    </article>
    <aside class="pacs-library panel">
      <div class="library-tabs"><button class="active">公共模板</button><button>个人模板</button><button>常用词条</button></div>
      <label class="library-search"><input id="pacs-template-search" placeholder="输入关键词"/>${icon('search','sm')}</label>
      <div class="template-tree"><div class="tree-folder">⌄&nbsp; ▱ CT</div><div class="tree-folder level2">⌄&nbsp; ▱ 颅脑</div><div id="pacs-template-list"></div></div>
    </aside>
    ${rightRailMarkup(true)}
  </section>`;
}

function rightRailMarkup(isPacs) {
  return `<aside class="right-rail" aria-label="快捷工具">
    <button class="rail-btn active">${icon('grid')}</button><button class="rail-btn">${icon('message')}</button><button class="rail-btn">${icon('file')}</button><button class="rail-btn">${icon('image')}</button><button class="rail-btn">${icon('list')}</button><button class="rail-btn">${icon('search')}</button><button class="rail-btn">${icon('flag')}</button><button class="rail-btn">${icon('plusbox')}</button>
    <div class="rail-spacer"></div><button class="analysis-success ${isPacs ? 'air-entry' : ''}" ${isPacs ? 'id="air-entry" title="返回 AIR 报告"' : ''}><span class="success-dot">✓</span><span>分析成功</span></button>
  </aside>`;
}

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <div class="viewport-stage"><main class="app-shell">
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

        ${state.currentView === 'air' ? airViewMarkup() : pacsViewMarkup()}
      </section>
    </main></div>`;
  renderPatients();
  if (state.currentView === 'air') {
    renderTemplates();
    renderReport();
  } else {
    renderPacsTemplates();
  }
  bindEvents();
  fitInterface();
}

function fitInterface() {
  const scale = Math.min(window.innerWidth / 1619, window.innerHeight / 971);
  document.documentElement.style.setProperty('--ui-scale', String(scale));
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
    persistCurrentAirDraft();
    state.selectedPatient = Number(row.dataset.patient);
    loadAirDraft(state.selectedPatient);
    renderApp(); toast(`已打开 ${patients.find(p => p.id === state.selectedPatient).name} 的${state.currentView === 'air' ? ' AIR' : ' PACS'}报告`);
  }));
}

function renderTemplates() {
  const grid = document.querySelector('#template-grid');
  if (!grid) return;
  const library = templateLibraries[state.templateTab] || templateLibraries.air;
  const q = state.templateQuery.trim().toLowerCase();
  const list = library.map((template, index) => ({ ...template, index })).filter(t => !q || `${t.name}${t.finding}${t.diagnosis}${t.source}`.toLowerCase().includes(q));
  grid.className = `template-grid ${state.templateTab === 'air' ? 'air-grid' : 'list-grid'}`;
  grid.innerHTML = list.length ? list.map(t => state.templateTab === 'air'
    ? `<button class="template-btn" data-template-index="${t.index}" title="${t.source}：${t.finding} / ${t.diagnosis}"><span>${t.name}</span><span class="plus">＋</span></button>`
    : `<button class="template-list-btn" data-template-index="${t.index}" title="${t.finding} / ${t.diagnosis}">${icon('file','sm')}<span>${t.name}</span><span class="plus">＋</span></button>`
  ).join('') : '<div class="loading-empty template-empty">未找到模板</div>';
  document.querySelectorAll('[data-template-index]').forEach(btn => btn.addEventListener('click', () => insertTemplate(state.templateTab, Number(btn.dataset.templateIndex))));
}

function renderPacsTemplates(query = '') {
  const container = document.querySelector('#pacs-template-list');
  if (!container) return;
  const q = query.trim().toLowerCase();
  const list = pacsTemplates.filter(item => !q || item.toLowerCase().includes(q));
  container.innerHTML = list.length ? list.map(item => `<button class="tree-item" data-pacs-template="${item}">${icon('file','sm')}<span>${item}</span></button>`).join('') : '<div class="tree-empty">未找到匹配模板</div>';
  document.querySelectorAll('[data-pacs-template]').forEach(button => button.addEventListener('click', () => {
    const draft = getPacsDraft();
    draft.diagnosis = `${draft.diagnosis.trim()}${draft.diagnosis.trim() ? '\n' : ''}${button.dataset.pacsTemplate}。`;
    document.querySelector('#pacs-diagnosis').value = draft.diagnosis;
    toast(`已插入公共模板“${button.dataset.pacsTemplate}”`);
  }));
}

function renderReport() {
  const findingBox = document.querySelector('#findings-box');
  const diagnosisBox = document.querySelector('#diagnoses-box');
  if (!findingBox || !diagnosisBox) {
    updateHistoryButtons();
    return;
  }
  findingBox.innerHTML = state.findings.map(item => reportLine(item, 'finding')).join('');
  diagnosisBox.innerHTML = state.diagnoses.map((item, index) => reportLine(item, 'diagnosis', index)).join('');
  document.querySelectorAll('.report-line').forEach(line => {
    line.addEventListener('click', (event) => {
      if (event.target.closest('.delete-line')) return;
      selectReportLink(Number(line.dataset.id));
    });
    const editable = line.querySelector('.line-text');
    let editStart = null;
    editable.addEventListener('focus', () => {
      editStart = reportSnapshot();
      selectReportLink(Number(line.dataset.id));
    });
    editable.addEventListener('input', () => {
      const target = line.dataset.kind === 'finding' ? state.findings : state.diagnoses;
      const item = target.find(i => i.id === Number(line.dataset.id));
      item.text = editable.textContent.trim();
      persistCurrentAirDraft();
    });
    editable.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        editable.blur();
      }
    });
    editable.addEventListener('blur', () => {
      if (!editStart) return;
      const changed = JSON.stringify(editStart) !== JSON.stringify(reportSnapshot());
      if (changed) pushUndoSnapshot(editStart);
      editStart = null;
    });
  });
  document.querySelectorAll('.delete-line').forEach(btn => btn.addEventListener('click', (event) => {
    event.stopPropagation(); deleteLine(btn.dataset.kind, Number(btn.dataset.id));
  }));
  updateHistoryButtons();
}

function selectReportLink(id) {
  state.selectedLink = id;
  document.querySelectorAll('.report-line').forEach(line => line.classList.toggle('selected', Number(line.dataset.id) === id));
}

function reportLine(item, kind, index = 0) {
  const number = kind === 'diagnosis' ? `<span class="diagnosis-number">${index + 1}、</span>` : '';
  return `<div class="report-line ${item.id === state.selectedLink ? 'selected' : ''}" data-id="${item.id}" data-kind="${kind}">${number}<span class="line-text" contenteditable="true" spellcheck="false">${item.text}</span><button class="delete-line" data-kind="${kind}" data-id="${item.id}" aria-label="删除该条">×</button></div>`;
}

function cleanReportItem(text) {
  return text.trim().replace(/^\d+[.、]\s*/, '').replace(/[。；;\s]+$/, '');
}

function formatFindings(items) {
  const content = items.map(item => cleanReportItem(item.text)).filter(Boolean).join('；');
  return content ? `${content}。` : '';
}

function formatDiagnoses(items) {
  return items.map(item => cleanReportItem(item.text)).filter(Boolean).map((text, index) => `${index + 1}、${text}。`).join('\n');
}

function reportSnapshot() {
  return { findings: structuredClone(state.findings), diagnoses: structuredClone(state.diagnoses) };
}

function restoreReport(snapshot) {
  state.findings = structuredClone(snapshot.findings);
  state.diagnoses = structuredClone(snapshot.diagnoses);
  state.selectedLink = 0;
  persistCurrentAirDraft();
}

function saveUndo() {
  pushUndoSnapshot(reportSnapshot());
}

function pushUndoSnapshot(snapshot) {
  state.undoStack.push(structuredClone(snapshot));
  if (state.undoStack.length > 20) state.undoStack.shift();
  state.redoStack = [];
  updateHistoryButtons();
}

function updateHistoryButtons() {
  const ready = (state.generationStatus[airReportKey()] || 'ready') === 'ready';
  const undoButton = document.querySelector('#undo');
  const redoButton = document.querySelector('#redo');
  if (undoButton) undoButton.disabled = !ready || state.undoStack.length === 0;
  if (redoButton) redoButton.disabled = !ready || state.redoStack.length === 0;
}

function undoReport() {
  const snapshot = state.undoStack.pop();
  if (!snapshot) return toast('暂无可撤销的操作');
  state.redoStack.push(reportSnapshot());
  restoreReport(snapshot);
  renderReport();
  toast('已撤销上一步操作，可点击重做恢复');
}

function redoReport() {
  const snapshot = state.redoStack.pop();
  if (!snapshot) return toast('暂无可重做的操作');
  state.undoStack.push(reportSnapshot());
  if (state.undoStack.length > 20) state.undoStack.shift();
  restoreReport(snapshot);
  renderReport();
  toast('已重做上一步操作');
}

function insertTemplate(tab, index) {
  const t = (templateLibraries[tab] || templateLibraries.air)[index];
  if (!t) return;
  saveUndo();
  const nextId = Math.max(0, ...state.findings.map(i => i.id), ...state.diagnoses.map(i => i.id)) + 1;
  state.findings.push({ id: nextId, text: t.finding });
  state.diagnoses.push({ id: nextId, text: t.diagnosis });
  state.selectedLink = nextId; renderReport(); toast(`已插入“${t.name}” · ${t.source}`);
}

function deleteLine(kind, id) {
  if (kind === 'diagnosis') {
    openDiagnosisDeleteDialog(id);
    return;
  }
  saveUndo();
  if (kind === 'finding') {
    state.findings = state.findings.filter(i => i.id !== id);
    state.diagnoses = state.diagnoses.filter(i => i.id !== id);
    toast('已删除影像所见及明确关联的诊断意见');
  }
  state.selectedLink = 0;
  persistCurrentAirDraft();
  renderReport();
}

function applyDiagnosisDeletion(id, syncFinding) {
  saveUndo();
  state.diagnoses = state.diagnoses.filter(item => item.id !== id);
  if (syncFinding) state.findings = state.findings.filter(item => item.id !== id);
  state.selectedLink = 0;
  persistCurrentAirDraft();
  document.querySelector('#modal-root').innerHTML = '';
  renderReport();
  toast(syncFinding ? '已删除诊断意见及对应影像所见' : '已删除诊断意见，关联影像所见已保留');
}

function openDiagnosisDeleteDialog(id) {
  const hasLinkedFinding = state.findings.some(item => item.id === id);
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop"><section class="modal delete-dialog" role="dialog" aria-modal="true" aria-labelledby="delete-dialog-title">
    <div class="modal-head"><span id="delete-dialog-title">删除诊断意见</span><button class="modal-close" aria-label="关闭">×</button></div>
    <div class="modal-body"><strong>是否同步删除对应的影像所见？</strong><p>${hasLinkedFinding ? '该诊断意见存在明确关联的影像所见，请选择删除方式。' : '未找到明确关联的影像所见，将仅删除当前诊断意见。'}</p></div>
    <div class="modal-actions"><button class="btn modal-cancel">取消</button><button class="btn delete-only">仅删除诊断意见</button><button class="btn danger delete-linked" ${hasLinkedFinding ? '' : 'disabled'}>同步删除影像所见</button></div>
  </section></div>`;
  const close = () => { document.querySelector('#modal-root').innerHTML = ''; };
  document.querySelector('.modal-close').addEventListener('click', close);
  document.querySelector('.modal-cancel').addEventListener('click', close);
  document.querySelector('.modal-backdrop').addEventListener('click', event => { if (event.target.classList.contains('modal-backdrop')) close(); });
  document.querySelector('.delete-only').addEventListener('click', () => applyDiagnosisDeletion(id, false));
  document.querySelector('.delete-linked')?.addEventListener('click', () => { if (hasLinkedFinding) applyDiagnosisDeletion(id, true); });
}

function bindEvents() {
  document.querySelector('#patient-query-btn').addEventListener('click', () => {
    state.patientQuery = document.querySelector('#patient-search').value; renderPatients();
  });
  document.querySelector('#patient-search').addEventListener('keydown', e => { if (e.key === 'Enter') { state.patientQuery = e.target.value; renderPatients(); } });
  document.querySelector('#template-search')?.addEventListener('input', e => { state.templateQuery = e.target.value; renderTemplates(); });
  document.querySelectorAll('[data-template-tab]').forEach(button => button.addEventListener('click', () => {
    state.templateTab = button.dataset.templateTab;
    state.templateQuery = '';
    document.querySelectorAll('[data-template-tab]').forEach(tab => {
      const active = tab.dataset.templateTab === state.templateTab;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    const search = document.querySelector('#template-search');
    if (search) search.value = '';
    renderTemplates();
  }));
  document.querySelectorAll('[data-air-model]').forEach(button => button.addEventListener('click', () => {
    const nextModel = button.dataset.airModel;
    if (nextModel === currentAirModel()) return;
    persistCurrentAirDraft();
    state.airModelByPatient[state.selectedPatient] = nextModel;
    loadAirDraft(state.selectedPatient);
    renderApp();
    toast(`已切换至${airModelCatalog[nextModel].label}`);
  }));
  document.querySelector('#negative-template')?.addEventListener('click', () => {
    saveUndo();
    if (currentAirModel() === 'chest') {
      state.findings = [{ id: 201, text: '胸廓对称，双肺纹理清晰，纵隔居中，未见明显肿大淋巴结。' }];
      state.diagnoses = [{ id: 201, text: '胸部 CT 平扫未见明显异常。' }];
    } else {
      state.findings = [{ id: 101, text: '颅脑形态正常，脑实质未见明显异常密度影，中线结构居中。' }];
      state.diagnoses = [{ id: 101, text: '颅脑 CT 平扫未见明显异常。' }];
    }
    state.selectedLink = state.findings[0].id; renderReport(); toast('已替换为当前 AIR 模型的阴性模板，可继续编辑');
  });
  document.querySelector('#undo')?.addEventListener('click', undoReport);
  document.querySelector('#redo')?.addEventListener('click', redoReport);
  document.querySelector('#original-report')?.addEventListener('click', () => {
    const original = originalAirReport();
    openModal('模型原始报告', `影像所见\n${formatFindings(original.findings)}\n\n诊断意见\n${formatDiagnoses(original.diagnoses)}`);
  });
  document.querySelector('#organize-report')?.addEventListener('click', organizeReport);
  document.querySelector('#regenerate-report')?.addEventListener('click', regenerateReport);
  document.querySelector('#retry-generation')?.addEventListener('click', regenerateReport);
  document.querySelector('#back-pacs')?.addEventListener('click', () => {
    persistCurrentAirDraft(); state.currentView = 'pacs'; renderApp(); toast('已返回 PACS 编辑，PACS 原报告内容保持不变');
  });
  document.querySelector('#quote-pacs')?.addEventListener('click', () => {
    const draft = getPacsDraft();
    draft.findings = formatFindings(state.findings);
    draft.diagnosis = formatDiagnoses(state.diagnoses);
    draft.imported = true; persistCurrentAirDraft(); state.currentView = 'pacs'; renderApp(); toast('AIR 报告已同步到 PACS 编辑框，尚未发布');
  });
  document.querySelector('#specialty-primary')?.addEventListener('click', () => {
    const chest = currentAirModel() === 'chest';
    openModal(chest ? '肺结节 AI 辅助诊断' : '脑出血 AI 辅助诊断', `${chest ? '本次检查未检出明确肺结节征象。' : '本次检查未检出明确颅内出血征象。'}\n\n演示说明：进入专项分析前，当前 AIR 草稿已自动暂存。`);
  });
  document.querySelector('#air-entry')?.addEventListener('click', () => { state.currentView = 'air'; renderApp(); toast('已恢复当前检查的 AIR 工作草稿'); });
  document.querySelector('#pacs-findings')?.addEventListener('input', e => { getPacsDraft().findings = e.target.value; });
  document.querySelector('#pacs-diagnosis')?.addEventListener('input', e => { getPacsDraft().diagnosis = e.target.value; });
  document.querySelector('#pacs-template-search')?.addEventListener('input', e => renderPacsTemplates(e.target.value));
  document.querySelectorAll('[data-generic]').forEach(btn => btn.addEventListener('click', () => {
    if (state.currentView === 'pacs' && btn.dataset.generic === 'AI 诊断') {
      state.currentView = 'air'; renderApp(); toast('已从 PACS 返回当前检查的 AIR 报告'); return;
    }
    toast(`${btn.dataset.generic}：演示操作已响应`);
  }));
  document.querySelectorAll('.rail-btn').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }));
}

function organizeReport() {
  saveUndo();
  const seen = new Set();
  state.findings = state.findings.filter(item => { const normalized = item.text.replace(/\s/g,''); if (seen.has(normalized)) return false; seen.add(normalized); return true; });
  const combinedFindings = formatFindings(state.findings);
  state.findings = combinedFindings ? [{ id: state.findings[0]?.id || 1, text: combinedFindings }] : [];
  state.diagnoses = state.diagnoses.map(item => ({ ...item, text: `${cleanReportItem(item.text)}。` })).filter(item => item.text !== '。');
  state.selectedLink = 0; renderReport(); toast('报告已基于当前编辑内容完成整理，可撤销');
}

function buildRegeneratedReport(patientId, model, count) {
  const source = originalAirReport(patientId, model);
  const wording = [
    ['脑沟、脑裂', '脑沟及脑裂'],
    ['中线结构居中', '中线结构未见明显偏移'],
    ['脑室系统形态、大小正常', '脑室系统形态及大小未见明显异常'],
    ['未见明显异常密度影', '未见确切异常密度影'],
    ['未见异常密度影', '未见明确异常密度影'],
    ['边界尚清', '边界较清'],
    ['边缘清晰', '边界清楚'],
    ['透亮度良好', '气化良好'],
    ['无明显偏移', '未见明显偏移'],
    ['生理性钙化', '钙化，考虑生理性']
  ];
  const revise = text => wording.reduce((result, [from, to]) => result.replaceAll(from, to), text);
  const alternateOrder = count % 2 === 1;
  const findings = structuredClone(source.findings).map(item => ({ ...item, text: revise(item.text) }));
  const diagnoses = structuredClone(source.diagnoses).map(item => ({ ...item, text: revise(item.text) }));
  return {
    findings: alternateOrder ? findings.reverse() : findings,
    diagnoses: alternateOrder && diagnoses.length > 1 ? diagnoses.reverse() : diagnoses
  };
}

function regenerateReport() {
  const patientId = state.selectedPatient;
  const model = currentAirModel(patientId);
  const key = airReportKey(patientId, model);
  const status = state.generationStatus[key] || 'ready';
  if (status === 'generating') return;
  if (status === 'ready') saveUndo();
  state.generationStatus[key] = 'generating';
  renderApp();

  window.setTimeout(() => {
    const nextCount = (state.generationCount[key] || 0) + 1;
    const report = buildRegeneratedReport(patientId, model, nextCount);
    state.generationCount[key] = nextCount;
    state.generationStatus[key] = 'ready';
    state.airDrafts[key] = structuredClone(report);
    if (state.selectedPatient === patientId && currentAirModel(patientId) === model) {
      state.findings = structuredClone(report.findings);
      state.diagnoses = structuredClone(report.diagnoses);
      state.selectedLink = state.findings[0]?.id || 0;
      if (state.currentView === 'air') {
        renderApp();
        toast(status === 'failed' ? 'AIR 报告重试生成成功' : 'AIR 报告已重新生成，可撤销恢复上一版');
      }
    }
  }, 650);
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

window.addEventListener('resize', fitInterface);
renderApp();
