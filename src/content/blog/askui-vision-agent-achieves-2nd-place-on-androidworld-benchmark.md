## TLDR

AskUI, a German tech startup, announced that its **Vision Agent** achieved **2nd place** on the **AndroidWorld benchmark** (developed by Google Research) with a **94.8% task completion rate** (108 out of 116 tasks).

- **What it does:** The agent automates complex, multi-app mobile tasks on Android using **simple natural language instructions**.

- **How it works:** It uses a **vision-first approach**, relying only on what's visible on the screen. It employs **Anthropic's Claude Sonnet 4.5** for reasoning and planning, combined with a proprietary controller for precise, pixel-level UI interactions.

- **Significance:** The result validates that AskUI's single-model, vision-based automation approach is highly effective and **ready for production use** in areas like QA testing and enterprise workflow automation.

- **Next Steps:** The team is focused on improving performance in tasks with **dynamic or rapidly changing UIs** (where timing mismatch is an issue).

---

Imagine a world where routine mobile tasks, from managing contacts to tracking expenses, from scheduling appointments to organizing notes, can be automated with simple natural language instructions. Android, the world's most popular mobile operating system with over 3 billion active devices, represents an enormous opportunity for this. From automatically organizing photos to scheduling recurring calendar events and backing up important notes, the use cases span productivity, communication, entertainment, and beyond. For enterprises, this means QA teams can automate complex multi-app user journeys. For individuals, it means reclaiming hours spent on repetitive mobile tasks.

But in a crowded field of automation tools and AI agents, why should you choose [AskUI](https://www.notion.so/26c19a9494f880c2881df78b0a768f13?pvs=21) to automate your Android phone? We constantly challenge ourselves with this exact question. Rather than relying on marketing claims, we sought a quantitative, objective answer.

**That's why we're excited to announce:** [**AskUI Vision Agent**](https://github.com/askui/askui) **has achieved 2nd place on the AndroidWorld benchmark, with a task completion rate of 94.8%.**

This is a validation that our vision-first approach to UI automation, powered by our [Android Vision Agent](https://www.askui.com/blog-posts/tutorial-automate-web-search-on-android-devices-with-askui), delivers real-world results on one of the most challenging mobile automation benchmarks available.

## What is AndroidWorld?

[AndroidWorld](https://google-research.github.io/android_world/) is a comprehensive benchmark environment developed by Google Research specifically for evaluating autonomous agents on Android devices. In total, it consists of 116 tasks spanning various domains, such as communication, productivity, entertainment, utilities, and system operations. These tasks represent multi-step workflows that require the agent to navigate across multiple apps, extract relevant information, and interact with dynamic UIs. As AndroidWorld maintains a public [leaderboard](https://docs.google.com/spreadsheets/d/1cchzP9dlTZ3WXQTfYNhh3avxoLipqHN75v1Tb86uhHo/edit?gid=0#gid=0) it is a great opportunity for us to challenge our Android Vision Agent against the systems of other research teams and companies.

## What is the AskUI Vision Agent?

We are a small tech startup from Germany. We have developed a [library](https://github.com/askui/askui) that allows for reliable, automated end-to-end automation that only depends on what is shown on your screen instead of the technology or platform you are running on. One core feature of the library is our [Vision Agent](https://docs.askui.com/01-tutorials/01-your-first-agent). It is a system that interfaces with modern large language models on one end, and your system through our [AskUI Controller](https://www.askui.com/blog-posts/developing-an-automated-ui-controller-using-gpt-agents-and-gpt-4-vision#toc-4.-device-controller:-the-interactive-core) on the other end. It allows to control your desktop, or mobile phone, and hence automate tasks. With support for multiple AI models, multi-platform compatibility, and enterprise-ready features.

## How We Run our Vision Agent on AndroidWorld

Running our [Vision Agent](https://docs.askui.com/01-tutorials/01-your-first-agent) on AndroidWorld is very straightforward. You can find detailed instructions how to set this system up on your machine in a few minutes in our recent post [here](https://www.askui.com/blog-posts/tutorial-automate-web-search-on-android-devices-with-askui). In contrast to our many competitors, we do **not** use complicated, expensive and slow multi-step pipelines. We believe in starting with simplicity and are convinced that modern state-of-the-art UI Agents can be built on a single AI model when using 1) meaningful prompts, 2) effectively engineered context, and 3) a high-bandwidth, precise, and error free interface to OS operations.

Hence, we use Anthropic's Claude Sonnet 4.5 as our reasoning and planning model and our proprietary controller to capture screenshots and handle UI interactions. For each task, Claude analyzes the task, evaluates the state of the UI, and plans what interaction it needs to do next. These interactions range from capturing a screenshot, over execution of touch, or swipe gestures to data entry via keyboard. Our controller will then execute these interactions pixel-precise on the UI.

As we found Claude 4.5 to occasionally refuse the execution of a task without obvious reason, we use its less capable but more robust predecessor Claude 4.0 as a fallback in these situations (we indicate these tasks with an asterix in the overview below).

## What We Found: ~95% Success Rate

Our Android Vision Agent **completed 108 of AndroidWorld's 116 tasks successfully**, securing us second place on the [leaderboard](https://docs.google.com/spreadsheets/d/1cchzP9dlTZ3WXQTfYNhh3avxoLipqHN75v1Tb86uhHo/edit?gid=0#gid=0)! While this proves, that our agent is capable of navigating UIs effectively and of accomplishing tasks at human level, we see this only as the starting point and not as the finish line. Through our analysis, we identified a key challenge: **tasks involving dynamic or rapidly changing UIs**. When screen content changes between the moment our agent captures a screenshot and when it executes an action, the visual context becomes stale. These scenarios create a timing mismatch in our perception-action loop. We're actively working on solutions, including faster screenshot-to-action cycles, predictive UI state modeling, and more robust handling of transient UI elements.

### Full Results Overview

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

Numbers don't lie. Achieving 2nd place on AndroidWorld with 95% task completion is a validation that vision-based AI automation is ready for production use. Our combination of powerful reasoning with robust and precise OS-level control delivers the reliability and flexibility needed for real-world mobile automation.

Whether you're automating QA testing, building accessibility tools, or streamlining enterprise mobile workflows, askUI provides the technology to make it happen. The future of mobile automation is agentic. And it's available today.
