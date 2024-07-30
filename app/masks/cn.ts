import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5a5-fe0f",
    name: "广州大学知识库",
    context: [
      {
        id: "mentor-0",
        role: "system",
        content: `<p>智能助手为您提供校园快捷信息查询服务。</p>

<h2 tabindex="-1"># 快捷入口</h2>
<p><a href="http://www.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">广大官网 | 广州大学官网<span><svg
                class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="https://newmy.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">数字广大 |
        广州大学的数字服务<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="https://hello.acastu.com/" target="_blank" rel="noopener noreferrer">广大灯塔 |
        广大er的导航网站<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="http://mail.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">广大邮箱 |
        广州大学教育邮箱(教师端)<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="http://mail.e.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">广大邮箱 |
        广州大学教育邮箱(学生端)<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="http://jwxt.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">教务系统 |
        直达广州大学教务系统<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="http://lib.gzhu.edu.cn/w/" target="_blank" rel="noopener noreferrer">图书馆 |
        广州大学图书馆网站<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="http://yjsy.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">研究生院 |
        广州大学研究生院官网<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="https://webvpn.gzhu.edu.cn" target="_blank" rel="noopener noreferrer">WebVPN |
        网页访问即可登录的VPN<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a><br>
    <a href="https://netcenter.gzhu.edu.cn/" target="_blank" rel="noopener noreferrer">信息与技术 |
        实验中心、网络与现代教育技术中心<span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                <path fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z">
                </path>
                <polygon fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9">
                </polygon>
            </svg></span></a>
</p>`,
        date: "",
      },
    ],
    modelConfig: {
      model: "knowledge-chat",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480537,
  },
  {
    avatar: "1f469-200d-1f4bb",
    name: "职业顾问",
    context: [
      {
        id: "cons-0",
        role: "user",
        content:
          "我想让你担任职业顾问。我将为您提供一个在职业生涯中寻求指导的人，您的任务是帮助他们根据自己的技能、兴趣和经验确定最适合的职业。您还应该对可用的各种选项进行研究，解释不同行业的就业市场趋势，并就哪些资格对追求特定领域有益提出建议。我的第一个请求是",
        date: "",
      },
    ],
    modelConfig: {
      model: "chat",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480514,
  },
  {
    avatar: "1f469-200d-1f4bb",
    name: "简历写手",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "我需要你写一份通用简历，每当我输入一个职业、项目名称时，你需要完成以下任务：\ntask1: 列出这个人的基本资料，如姓名、出生年月、学历、面试职位、工作年限、意向城市等。一行列一个资料。\ntask2: 详细介绍这个职业的技能介绍，至少列出10条\ntask3: 详细列出这个职业对应的工作经历，列出2条\ntask4: 详细列出这个职业对应的工作项目，列出2条。项目按照项目背景、项目细节、项目难点、优化和改进、我的价值几个方面来描述，多展示职业关键字。也可以体现我在项目管理、工作推进方面的一些能力。\ntask5: 详细列出个人评价，100字左右\n你把以上任务结果按照以下Markdown格式输出：\n\n```\n### 基本信息\n<task1 result>\n\n### 掌握技能\n<task2 result>\n\n### 工作经历\n<task3 result>\n\n### 项目经历\n<task4 result>\n\n### 关于我\n<task5 result>\n\n```",
        date: "",
      },
      {
        id: "cv-1",
        role: "assistant",
        content: "好的，请问您需要我为哪个职业编写通用简历呢？",
        date: "",
      },
    ],
    modelConfig: {
      model: "chat",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f469-200d-1f393",
    name: "随便聊一聊",
    context: [
      {
        id: "cons-0",
        role: "system",
        content: "有什么可以帮你的吗?",
        date: "",
      },
    ],
    modelConfig: {
      model: "chat",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480514,
  },
];
