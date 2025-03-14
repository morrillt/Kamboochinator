


### **Prompt for Cursor: Incremental Markdown-Based Development Plan**  

#### **Context**  
This prompt is for Cursor to generate a structured series of markdown files that guide me step by step in developing a project.  

#### **Problem**  
Historically, when I provide a high-level prompt, Cursor generates an overwhelming number of files that don’t work as intended. The output is difficult to debug, and the process lacks clear checkpoints.  

#### **Solution**  
Instead of a massive, unmanageable output, I want a structured approach:  

- Generate **incremental markdown files** named:  
  - `milestone-step1.md`  
  - `boochstart-step2.md`  
  - `boochstart-step3.md`  
  - `boochstart-step4.md`  
  - `boochstart-step5.md`  
- Each file should focus on **one specific, verifiable goal**, allowing me to check progress step by step.  

#### **Instructions for Each Step**  
Each markdown file should contain two sections:  
1. **Execution Instructions** – A set of commands and steps for me to execute.  
2. **Troubleshooting & QA** – A systematic way to verify output and debug issues.  

##### **Debugging & Verification**  
- Include **excessive** `console.log()` statements for clarity.  
- Ask me to **verify** console logs at key points.  
- Provide a **comparison table** for expected vs. actual console outputs.  

##### **Example Console Log Verification Table**  

| Step | Expected Console Output | Actual Console Output | Status (✅/❌) |  
|------|-------------------------|-----------------------|---------------|  
| 1    | `App initialized`       | `[user input]`        | ❌            |  
| 2    | `Data fetched`          | `[user input]`        | ✅            |  

This method will ensure a smooth, manageable development process while allowing quick identification of issues.
