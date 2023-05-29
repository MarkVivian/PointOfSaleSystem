@echo off

REM Function to execute npm start
:run_npm_start
cd /d "C:\path\to\first\directory"
start /B "" npm start
echo npm start executed.
timeout /t 5 >nul
echo Proceeding to run frontend.

REM Function to execute npm run dev
:run_npm_run_dev
cd /d "C:\path\to\second\directory"
start /B "" npm run dev
echo npm run dev executed.
echo Proceeding to open chrome.

REM Open Chrome browser to localhost:3301
echo Opening Chrome browser...
start chrome http://localhost:3301

echo Script execution completed.
exit