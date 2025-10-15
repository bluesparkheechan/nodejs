# Git 기본 명령어

| 명령어 | 설명 | 예시 |
| :--- | :--- | :--- |
| **`git init`** | 현재 디렉토리를 Git 저장소(Repository)로 초기화합니다. | `git init` |
| **`git clone [저장소 URL]`** | 원격 저장소(Remote Repository)를 로컬 환경으로 복제합니다. | `git clone https://github.com/user/repo.git` |
| **`git add [파일 이름]`** | 작업 디렉토리의 변경 내용을 스테이징 영역(Staging Area)에 추가합니다. | `git add .` (모든 변경) 또는 `git add index.html` (특정 파일) |
| **`git commit -m "[커밋 메시지]"`** | 스테이징 영역의 변경 내용을 로컬 저장소에 확정(저장)합니다. | `git commit -m "Add initial commit"` |
| **`git status`** | 저장소의 현재 상태를 확인합니다 (변경된 파일, 스테이징된 파일 등). | `git status` |
| **`git log`** | 커밋 이력(History)을 시간순으로 보여줍니다. | `git log` 또는 `git log --oneline` (한 줄로 요약) |
| **`git diff`** | 마지막 커밋과 현재 작업 디렉토리의 변경 내용을 비교하여 보여줍니다. | `git diff` |
| **`git branch`** | 브랜치 목록을 보여주거나 새로운 브랜치를 생성합니다. | `git branch` (목록) 또는 `git branch new-feature` (생성) |
| **`git checkout [브랜치 이름]`** | 다른 브랜치로 전환(이동)합니다. | `git checkout new-feature` |
| **`git merge [브랜치 이름]`** | 현재 브랜치에 다른 브랜치의 변경 내용을 병합합니다. | `git merge new-feature` |
| **`git remote add [이름] [URL]`** | 로컬 저장소에 원격 저장소를 연결합니다. (보통 'origin' 사용) | `git remote add origin https://github.com/user/repo.git` |
| **`git push [원격 저장소] [브랜치]`** | 로컬 저장소의 변경 내용을 원격 저장소에 업로드합니다. | `git push origin main` |
| **`git pull [원격 저장소] [브랜치]`** | 원격 저장소의 변경 내용을 가져와 현재 브랜치와 병합합니다. | `git pull origin main` |
| **`git fetch [원격 저장소]`** | 원격 저장소의 최신 정보를 가져오지만, 병합은 하지 않습니다. | `git fetch origin` |