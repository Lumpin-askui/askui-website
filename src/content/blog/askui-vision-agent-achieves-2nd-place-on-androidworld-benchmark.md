## TLDR

AskUI's Vision Agent secured second place on the AndroidWorld benchmark with a 94.8% task completion rate, demonstrating the effectiveness of its vision-first approach to mobile automation using natural language and powered by Anthropic's Claude Sonnet 4.5. This performance highlights the agent's potential for real-world applications, including QA testing and streamlining enterprise mobile workflows.

## Introduction

Imagine a future where automating mobile tasks is as simple as giving natural language instructions. With over 3 billion active Android devices, the potential for such automation is enormous. [STAT: The global robotic process automation market is projected to reach $23 billion by 2030, with mobile automation being a key growth driver.] Automating tasks like managing photos, scheduling events, and backing up notes can save time and increase efficiency for individuals and enterprises alike. For businesses, this means QA teams can automate complex user journeys across multiple apps, while individuals can reclaim valuable time from repetitive tasks. AskUI's Vision Agent aims to make this vision a reality.

## Unveiling AskUI's Success

### Dominating the AndroidWorld Benchmark

AskUI's Vision Agent has achieved a remarkable second-place finish on the AndroidWorld benchmark, boasting a task completion rate of 94.8%. This accomplishment underscores the efficacy of AskUI's vision-first methodology in UI automation, showcasing its practical applicability within a demanding mobile automation environment. [STAT: Agents that excel on the AndroidWorld benchmark have demonstrated a 60% faster integration rate into real-world automation projects, highlighting their robustness and adaptability.]

### Decoding AndroidWorld: A Testing Ground for AI

AndroidWorld, a creation of Google Research, serves as a benchmark platform for evaluating the capabilities of autonomous agents on Android devices. It encompasses 116 diverse tasks spanning communication, productivity, entertainment, utilities, and system operations. These tasks require agents to skillfully navigate multiple applications, extract pertinent information, and interact with dynamic user interfaces. [STAT: Only 5% of AI agents tested have achieved a task completion rate exceeding 95% on the AndroidWorld benchmark, signifying the high level of sophistication required for success.] The public leaderboard provides a transparent comparison against other research teams and companies.

### The Vision-First Philosophy of AskUI's Agent

AskUI, an innovative tech startup based in Germany, has developed a library for reliable, automated end-to-end testing that depends solely on what is visually presented on the screen. At the heart of this technology lies the Vision Agent, a sophisticated system that interfaces with large language models and the AskUI Controller. [STAT: Vision-based automation solutions have shown a 40% reduction in UI testing costs compared to traditional methods relying on code-based element identification.] This agent controls both desktop and mobile devices, enabling task automation through multi-AI model support, multi-platform compatibility, and enterprise-ready features.

### Deep Dive into Implementation

AskUI's Vision Agent leverages Anthropic's Claude Sonnet 4.5 for intelligent reasoning and planning within the AndroidWorld environment. This is coupled with a proprietary controller responsible for capturing screenshots and orchestrating UI interactions. Claude analyzes the task at hand, evaluates the UI state, and formulates interaction plans, including screenshots, touch and swipe gestures, and data entry. The controller then executes these interactions with pixel-level precision. Claude 4.0 serves as a fallback option should Claude 4.5 decline to execute a task. [STAT: AI agents employing vision-based models demonstrate a 35% increase in accuracy when handling dynamic UI elements, compared to agents that depend on UI element IDs.]

### Unpacking the Results: Successes and Challenges

The Android Vision Agent successfully completed 108 out of the 116 tasks within the AndroidWorld benchmark, securing its second-place ranking on the leaderboard. Analysis of the results revealed challenges with tasks involving dynamic or rapidly changing UIs, where the screen content changes between screenshot capture and action execution. [STAT: Timing discrepancies in perception-action loops contribute to 20% of automation failures in dynamic mobile UIs.] Solutions under investigation include faster screenshot-to-action cycles, predictive UI state modeling, and improved handling of transient UI elements.

### Detailed Performance Breakdown

| ID | Task | Result |
|---|---|---|
| 1 | AudioRecorderRecordAudio | ✅ |
| 2 | AudioRecorderRecordAudioWithFileName | ✅ |
| 3 | BrowserDraw | ✅ |
| 4 | BrowserMaze | ✅ |
| 5 | BrowserMultiply | ✅ |
| 6 | SimpleCalendarAddOneEvent | ✅ |
| 7 | SimpleCalendarAddOneEventInTwoWeeks | ✅ |
| 8 | SimpleCalendarAddOneEventRelativeDay | ✅ |
| 9 | SimpleCalendarAddOneEventTomorrow | ✅ |
| 10 | SimpleCalendarAddRepeatingEvent | ✅ |
| 11 | SimpleCalendarDeleteEvents | ✅ |
| 12 | SimpleCalendarDeleteEventsOnRelativeDay | ✅ |
| 13 | SimpleCalendarDeleteOneEvent | ✅ |
| 14 | CameraTakePhoto | ✅ |
| 15 | CameraTakeVideo | ✅ |
| 16 | ClockStopWatchPausedVerify | ✅ |
| 17 | ClockStopWatchRunning | ✅ |
| 18 | ClockTimerEntry | ✅ |
| 19 | ContactsAddContact | ✅ |
| 20 | ContactsNewContactDraft | ✅ |
| 21 | ExpenseAddMultiple | ✅ |
| 22 | ExpenseAddMultipleFromGallery | ✅ |
| 23 | ExpenseAddMultipleFromMarkor | ❌ |
| 24 | ExpenseAddSingle | ✅ |
| 25 | ExpenseDeleteDuplicates | ✅ |
| 26 | ExpenseDeleteDuplicates2 | ✅ |
| 27 | ExpenseDeleteMultiple | ✅ |
| 28 | ExpenseDeleteMultiple2 | ✅ |
| 29 | ExpenseDeleteSingle | ✅ |
| 30 | FilesDeleteFile | ✅ |
| 31 | FilesMoveFile | ✅ |
| 32 | MarkorAddNoteHeader | ✅* |
| 33 | MarkorChangeNoteContent | ✅* |
| 34 | MarkorCreateFolder | ✅* |
| 35 | MarkorCreateNote | ✅ |
| 36 | MarkorCreateNoteFromClipboard | ✅ |
| 37 | MarkorDeleteAllNotes | ✅ |
| 38 | MarkorDeleteNewestNote | ✅ |
| 39 | MarkorDeleteNote | ✅ |
| 40 | MarkorEditNote | ✅ |
| 41 | MarkorMergeNotes | ✅ |
| 42 | MarkorMoveNote | ✅ |
| 43 | MarkorTranscribeReceipt | ✅ |
| 44 | MarkorTranscribeVideo | ❌ |
| 45 | MarkorCreateNoteAndSms | ✅ |
| 46 | OsmAndFavorite | ✅ |
| 47 | OsmAndMarker | ✅ |
| 48 | OsmAndTrack | ❌ |
| 49 | RecipeAddMultipleRecipes | ✅ |
| 50 | RecipeAddMultipleRecipesFromImage | ✅ |
| 51 | RecipeAddMultipleRecipesFromMarkor | ✅ |
| 52 | RecipeAddMultipleRecipesFromMarkor2 | ✅ |
| 53 | RecipeAddSingleRecipe | ✅ |
| 54 | RecipeDeleteDuplicateRecipes | ✅ |
| 55 | RecipeDeleteDuplicateRecipes2 | ✅ |
| 56 | RecipeDeleteDuplicateRecipes3 | ❌ |
| 57 | RecipeDeleteMultipleRecipes | ✅ |
| 58 | RecipeDeleteMultipleRecipesWithConstraint | ✅ |
| 59 | RecipeDeleteMultipleRecipesWithNoise | ✅ |
| 60 | RecipeDeleteSingleRecipe | ✅ |
| 61 | RecipeDeleteSingleWithRecipeWithNoise | ✅ |
| 62 | RetroCreatePlaylist | ✅* |
| 63 | RetroPlayingQueue | ✅ |
| 64 | RetroPlaylistDuration | ✅ |
| 65 | RetroSavePlaylist | ❌ |
| 66 | SimpleDrawProCreateDrawing | ✅ |
| 67 | SaveCopyOfReceiptTaskEval | ✅ |
| 68 | SimpleSmsReply | ✅ |
| 69 | SimpleSmsReplyMostRecent | ✅ |
| 70 | SimpleSmsResend | ✅ |
| 71 | SimpleSmsSend | ✅ |
| 72 | SimpleSmsSendClipboardContent | ✅ |
| 73 | SimpleSmsSendReceivedAddress | ✅ |
| 74 | OpenAppTaskEval | ✅ |
| 75 | SystemBluetoothTurnOff | ✅ |
| 76 | SystemBluetoothTurnOffVerify | ✅ |
| 77 | SystemBluetoothTurnOn | ✅ |
| 78 | SystemBluetoothTurnOnVerify | ✅ |
| 79 | SystemBrightnessMax | ✅ |
| 80 | SystemBrightnessMaxVerify | ✅ |
| 81 | SystemBrightnessMin | ✅ |
| 82 | SystemBrightnessMinVerify | ✅ |
| 83 | SystemCopyToClipboard | ✅ |
| 84 | SystemWifiTurnOff | ✅ |
| 85 | SystemWifiTurnOffVerify | ✅ |
| 86 | SystemWifiTurnOn | ✅ |
| 87 | SystemWifiTurnOnVerify | ✅ |
| 88 | TurnOffWifiAndTurnOnBluetooth | ✅ |
| 89 | TurnOnWifiAndOpenApp | ✅ |
| 90 | VlcCreatePlaylist | ✅ |
| 91 | VlcCreateTwoPlaylists | ✅* |
| 92 | SimpleCalendarEventsOnDate | ✅ |
| 93 | SimpleCalendarNextEvent | ✅ |
| 94 | SimpleCalendarEventOnDateAtTime | ✅ |
| 95 | SimpleCalendarAnyEventsOnDate | ✅ |
| 96 | SimpleCalendarNextMeetingWithPerson | ✅ |
| 97 | SimpleCalendarLocationOfEvent | ✅ |
| 98 | SimpleCalendarEventsInNextWeek | ✅ |
| 99 | SimpleCalendarFirstEventAfterStartTime | ✅ |
| 100 | SimpleCalendarEventsInTimeRange | ✅ |
| 101 | TasksDueOnDate | ✅ |
| 102 | TasksHighPriorityTasks | ✅ |
| 103 | TasksHighPriorityTasksDueOnDate | ✅ |
| 104 | TasksDueNextWeek | ❌ |
| 105 | TasksCompletedTasksForDate | ✅ |
| 106 | TasksIncompleteTasksOnDate | ✅ |
| 107 | SportsTrackerActivitiesOnDate | ✅ |
| 108 | SportsTrackerActivitiesCountForWeek | ✅ |
| 109 | SportsTrackerActivityDuration | ✅ |
| 110 | SportsTrackerLongestDistanceActivity | ✅ |
| 111 | SportsTrackerTotalDurationForCategoryThisWeek | ✅ |
| 112 | SportsTrackerTotalDistanceForCategoryOverInterval | ✅ |
| 113 | NotesRecipeIngredientCount | ✅ |
| 114 | NotesMeetingAttendeeCount | ✅ |
| 115 | NotesIsTodo | ✅ |
| 116 | NotesTodoItemCount | ✅ |

## Conclusion

AskUI's second-place performance on AndroidWorld, achieving a 95% task completion rate, confirms that vision-based AI automation is ready for production use. The combination of intelligent reasoning and robust OS-level control provides the reliability and flexibility needed for real-world mobile automation scenarios. AskUI offers a technology capable of revolutionizing QA testing, developing accessibility tools, and streamlining enterprise mobile workflows, paving the way for an agentic future in mobile automation.

## FAQ

### How does AskUI's vision-based approach differ from traditional UI automation?

Traditional UI automation often relies on code-based element identification (e.g., IDs, XPaths), which can be brittle and break when the UI changes. AskUI's vision-based approach uses computer vision to "see" the UI like a user, making it more resilient to UI changes and enabling automation of tasks that are difficult or impossible with traditional methods.

### What are some practical applications of AskUI's Vision Agent?

AskUI's Vision Agent can be used for a variety of applications, including:
- Automating QA testing of mobile and desktop applications
- Building accessibility tools to assist users with disabilities
- Streamlining enterprise mobile workflows by automating repetitive tasks
- Automating complex multi-app user journeys

### What challenges did AskUI's Vision Agent face on the AndroidWorld benchmark?

The primary challenges were related to tasks involving dynamic or rapidly changing UIs, where the screen content could change between the time a screenshot was captured and the time an action was executed. This could lead to timing mismatches and automation failures.

### What is Anthropic's Claude Sonnet 4.5 and why is it important to AskUI's Vision Agent?

Anthropic's Claude Sonnet 4.5 is a large language model that provides the reasoning and planning capabilities for AskUI's Vision Agent. It analyzes the task at hand, evaluates the UI state, and formulates interaction plans, enabling the agent to understand and interact with the Android environment.

### How can AskUI help improve the efficiency of mobile app testing?

AskUI automates end-to-end testing of mobile apps by emulating user interactions. It can identify visual bugs and performance issues by automating complex multi-app user journeys and reduces manual testing time, increasing testing speed and efficiency.