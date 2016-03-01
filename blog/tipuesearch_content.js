var tipuesearch = {"pages":[{"url":"http://project.mde.tw/blog/pages/about/","title":"About","text":"機械設計專題網誌 http://project.mde.tw 是台灣國立虎尾科技大學機械設計工程系 (Department of Mechanical Design Engineering, National Formosa University, Taiwan ) KMOL 研究室 (Knowledge Management and Optimal utilization Laboratory) 專題網站, 與課程相關的網誌位於 http://chiamingyen.github.io/kmolab/blog/ . 本網誌的所有資料位於 https://github.com/coursemdetw/project_site , 除了所引用的資料特別聲明各自所宣告的使用授權外, 一律採用 AGPL 授權 https://github.com/coursemdetw/project_site/blob/gh-pages/LICENSE . 歡迎您的蒞臨! 專題成員 https://github.com/coursemdetw/project_site/watchers","tags":"misc"},{"url":"http://project.mde.tw/blog/40323130-shi-yong-zhe-de-fan-li-wang-zhi-wen-zhang-biao-ti.html","title":"40323130 - 使用者的範例網誌文章標題","text":"這裡放入 40323130 所寫的文章摘要 這裡為 40323130 所寫的文章主要內容","tags":"2016g1"},{"url":"http://project.mde.tw/blog/yen-2016-nian-zhuan-ti-qi-dong.html","title":"yen - 2016 年專題啟動","text":"利用 Github Pages 與 Pelican 建立協同專題製作網誌 機械設計工程網誌啟動 本網誌自 2016 Spring 開始啟動, 相關建置步驟如下: 以 https://github.com/coursemdetw 帳號建立 Gihub 倉儲 https://github.com/coursemdetw/project_site 將倉儲資料 git clone 到近端 利用 git branch 指令, 建立 gh-pages 分支 利用 git checkout 指令, 切換至 gh-pages 分支 開始建立 Pelican 網誌所需的協同架構資料 安排 users 目錄, 將分別存放各協同組員的 .leo 檔案 確定 gh-pages 分支中的網誌 http://coursemdetw.github.io/project_site/ 可以正常運作 根據 Github pages 專用網域設定說明 https://help.github.com/articles/using-a-custom-domain-with-github-pages/ , 建立 CNAME, 納入 project.mde.tw 將 https://github.com/coursemdetw/project_site 倉儲的 Default Branch 設為 gh-pages 分支 在 mde.tw 網域的 DNS 代管設定中, 加入 project.mde.tw 與 coursemdetw.github.io 之間的 CNAME 別名設定 等待 CNAME 別名生效後, http://project.mde.tw 即可正常連結使用 Pelican 網誌設定 由於本網誌將 Pelican https://github.com/getpelican/pelican 設定相關的所有資料都留在 Gihub 倉儲 https://github.com/coursemdetw/project_site 中, 目的在讓其他人可以參考本網誌的所有細節內容. 一般在實際應用, 只需將 blog 目錄 https://github.com/coursemdetw/project_site/tree/gh-pages/blog 中的資料送到全球資訊網伺服器即可. 本專題製作採用 http://leoeditor.com/ 管理所有資料, 但各參與協同的人員各自在 users 目錄下擁有一個 .leo 檔案, 可以分別控管本網誌的所有設定, 並且以協同方式維護網誌內容. 本網誌分為近端與 Github Pages 端的資料管理配置, 關鍵字搜尋採用 https://github.com/getpelican/pelican-plugins/tree/master/tipue_search , 近端的設定檔案為 local_publishconf.py, 而 Github Pages 端的特有設定為 publishconf.py, 且為了區隔兩端的資料連結差異, 近端的 Pelican 轉檔按鈕為 @button local pelican, 而 Github Pages 端的轉檔按鈕為 @button gh-pages pelican. 最後, 為了有效區隔各組員所寫的網誌文章, content 目錄內的各 .md 檔案, 除了要求必須冠上組員帳號外, 也希望在文章標題前面加上組員帳號標示, 以避免組員間因為使用相同的文章標題名稱而無法正確完成 Pelican 網誌的轉檔 (本系統採用自動文章標題轉換為 html 檔名的設定). 組員參與協同 所有專題製作成員均為 https://github.com/coursemdetw/project_site 倉儲的協同者, git clone 資料後, 即可將分支固定在 gh-pages 後進行各項資料協同管理的工作. 參與協同的步驟: git clone 倉儲資料. 確定在近端已經切換分支到 gh-pages, 利用 Leo Editor 開啟 users 目錄下的 user_template.leo 檔案. 修改 @edit user_20160301.md 的標題與內容, 例如, 將 @edit user_20160301.md 改為 @edit 學號_20160301.md, 且將 \"Title: user - 使用者的範例網誌文章標題\" 改為 \"Title: 學號 - 使用者的範例網誌文章標題\", \"Author: user\" 改為 \"Author: 學號\" 之後, 記得將已經修改過的 user_template.leo 存為 學號.leo 檔案. 在學號.leo 專案檔案中, 將滑鼠停在 @button local pelican 節點上, 再點擊 local-pelican 按鈕進行轉檔, 最後利用瀏覽器開啟 project_site 目錄中的 index.html, 檢查是否在近端可以正確轉檔. 若近端的 Pelican 網誌可以正確納入所新增的文章內容, 改將滑鼠停在 @button gh-pages pelican 節點上, 再點擊 gh-pages-pelican 按鈕, 進行 Github Pages 端所需要的內容轉檔. 利用 git add -A, git commit -m \"訊息\", git push origin gh-pages 等3個步驟, 將 gh-pages 分支資料, 提交並推送到 http://project.mde.tw 網誌資料儲存規劃 一個靜態網站的內容除了文字檔案外, 還包括 Javascript 檔案, Brython 檔案, 圖檔, 影片檔案, 以及其他各種非 html 的文件檔, 為了保有本網誌專案倉儲的簡潔, 除了必要的設定與文字檔案外, 其他資料均存放在倉儲以外的相關資源位置, 其規劃如下: Javascript 與 Brython 程式檔案, 除了儘量使用各 CDN 所提供的最新版本外, 目前以 https://github.com/2015fallhw/cptocadp/tree/master/static 對應的 OpenShift 網站存放, 例如, Cango-8v03.js 位於 http://cptocadp-2015fallhw.rhcloud.com/static/Cango-8v03.js 一般圖檔與非 html 文件檔案, 建議以 Github Pages 的網頁架構儲存在獨立的倉儲中, 且該倉儲僅存放檔案, 而無文字檔案, 例如: http://coursemdetw.github.io/project_site_files/files/kmol_1172x340_color_3yrs.png 即為其中的一個圖檔. 影片檔案則分別存在 https://vimeo.com/ 與 https://www.youtube.com/ (相同檔案各存一份). 圖檔引用 影片檔引用 Gocycle_disassemble from 虎尾科大機械設計工程 on Vimeo . 特別提醒 本網誌為了同時支援近端與遠端的資料內容使用, 資料轉檔分為近端按鈕與遠端按鈕, 協同成員在推送資料到遠端之前, 必須確定資料為遠端 Github Pages 格式. 鼓勵各成員深入研究本網誌的細節架構, 勇於提出問題, 解決問題, 打造出最適合機械設計工程團隊使用的網際協同架構、模式與系統工具.","tags":"Tutorial"},{"url":"http://project.mde.tw/blog/40323123-zhuan-ti-zu-yuan-de-fan-li-wen-zhang-biao-ti.html","title":"40323123 - 專題組員的範例文章標題","text":"這裡放入 40323123 所寫的文章摘要 這裡為 40323123 所寫的文章主要內容","tags":"2016g1"},{"url":"http://project.mde.tw/blog/user-shi-yong-zhe-de-fan-li-wang-zhi-wen-zhang-biao-ti.html","title":"user - 使用者的範例網誌文章標題","text":"這裡放入 user 所寫的文章摘要 這裡為 user 所寫的文章主要內容","tags":"Tutorial"},{"url":"http://project.mde.tw/blog/yen-github-pages-wang-ye-zi-liao-geng-xin-wen-ti.html","title":"yen - Github Pages 網頁資料更新問題","text":"突然間, Github Pages 的網頁轉換機制不再更新 使用 Github Pages 建立網頁最大的問題就是, 在完全沒有任何錯誤訊息提醒的情況下, 送到 Github Pages 對應分支倉儲的資料不再成功轉為網頁資料. 因應之道, 只能刪除原先不再更新的倉儲, 另外再建立一個對應的 Github Pages 倉儲, 重新進行各項設定.","tags":"Misc"}]};