// ========================================
// 설정 영역 (여기만 수정하세요!)
// ========================================

// 📸 이미지 파일 목록 (14번 제외)
const PHOTO_LIST = [
    'image (1).png',
    'image (2).png',
    'image (3).png',
    'image (4).png',
    'image (5).png',
    'image (6).png',
    'image (7).png',
    'image (8).png',
    'image (9).png',
    'image (10).png',
    'image (11).png',
    'image (12).png',
    'image (13).png',
    // 'image (14).png',  ← 14번 제외!
    'image (15).png',
    'image (16).png',
    'image (17).png',
    'image (18).png',
    'image (19).png',
    'image (20).png',
    'image (21).png',
    'image (22).png',
    'image (23).png',
    'image (24).png',
    'image (25).png',
    'image (26).png',
    'image (27).png',
    'image (28).png',
    'image (29).png',
    'image (30).png',
    'image (31).png',
    'image (32).png',
    'image (33).png',
    'image (34).png',
    'image (35).png',
    'image (36).png',
    'image (37).png',
    'image (38).png',
    'image (39).png',
    'image (40).png',
    'image (41).png',
    'image (42).png',
    'image (43).png',
    'image (44).png',
    'image (45).png',
    'image (46).png',
    'image (47).png',
    'image (48).png',
    'image (49).png',
    'image (50).png',
    'image (51).png',
    'image (52).png',
    'image (53).png',
    'image (54).png',
    'image (55).png',
    'image (56).png',
    'image (57).png',
    'image (58).png',
    'image (59).png',
    'image (60).png',
    'image (61).png',
    'image (62).png',
    'image (63).png',
    'image (64).png',
    'image (65).png',
    'image (66).png',
    'image (67).png',
    'image (68).png',
    'image (69).png',
    'image (70).png',
    'image (71).png',
    'image (72).png',
    'image (73).png',
    'image (74).png',
    'image (75).png',
    'image (76).png',
    'image (77).png',
    'image (78).png',
    'image (79).png',
    'image (80).png',
    'image (81).png',
    'image (82).png',
    'image (83).png',
    'image (84).png',
    'image (85).png',
    'image (86).png',
    'image (87).png',
    'image (88).png'
];

// 🎵 배경 음악 목록
const MUSIC_LIST = [
    { file: 'audio/bgm1.mp3', title: 'Feels So good - 척 지오반니' },
    { file: 'audio/bgm2.mp3', title: 'Ice Dance - 영화 <가위손> OST' },
    { file: 'audio/bgm3.mp3', title: 'House of Woodcock - 영화 <팬텀스레드> OST' },
    { file: 'audio/bgm4.mp3', title: 'Things In Life - 영화 <중경삼림> 삽입곡' },
    { file: 'audio/bgm5.mp3', title: 'Aqua - 영화 <괴물> OST' },
    { file: 'audio/bgm6.mp3', title: 'LOVE (Variation 2) - 영화 <해피엔드> OST' },
    { file: 'audio/bgm7.mp3', title: 'Obituary - 영화 <프렌치 디스패치> OST' },
    { file: 'audio/bgm8.mp3', title: 'The Shape Of Water - 영화 <셰이프 오브 워터> OST' },
];

// ========================================
// 아래는 건드리지 마세요!
// ========================================

const photos = PHOTO_LIST;

// 현재 음악 인덱스
let currentMusicIndex = Math.floor(Math.random() * MUSIC_LIST.length);

// 랜덤 셔플 함수
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 사진 순서 랜덤 섞기
const shuffledPhotos = shuffleArray(photos);

// 현재 보고 있는 사진 인덱스
let currentPhotoIndex = 0;

// 배경 음악 설정
const bgMusic = document.getElementById('bgMusic');

// 음악 로드 함수
function loadMusic(index) {
    const music = MUSIC_LIST[index];
    bgMusic.src = music.file;
    
    const titleElement = document.getElementById('musicTitle');
    titleElement.innerHTML = `<span>${music.title}</span>`;
    
    // 제목이 너비를 초과하는지 확인
    setTimeout(() => {
        const span = titleElement.querySelector('span');
        if (span.scrollWidth > titleElement.clientWidth) {
            titleElement.classList.add('scrolling');
        } else {
            titleElement.classList.remove('scrolling');
        }
    }, 100);
    
    currentMusicIndex = index;
}

// 첫 음악 로드
loadMusic(currentMusicIndex);

// ========================================
// 입장 화면
// ========================================

document.getElementById('entryButton').addEventListener('click', function() {
    const entryScreen = document.getElementById('entryScreen');
    const mainContent = document.querySelector('.main-content');
    const musicPlayer = document.getElementById('musicPlayer');

    // 음악 재생
    bgMusic.play().catch(e => console.log('음악 재생 실패:', e));

    // 입장 화면 숨기기
    entryScreen.classList.add('hidden');

    // body 스크롤 활성화
    document.body.classList.add('scrollable');

    // 스크롤초기화
    window.scrollTo(0, 0);

    // 메인 컨텐츠 표시
    setTimeout(() => {
    mainContent.classList.add('visible');
    musicPlayer.classList.add('visible');
    
    // ← 여기 추가!
    // 첫 곡 롤링 체크
    const titleElement = document.getElementById('musicTitle');
    const span = titleElement.querySelector('span');
    if (span && span.scrollWidth > titleElement.clientWidth) {
        titleElement.classList.add('scrolling');
    }
}, 800);
});

// ========================================
// 크레딧 아코디언
// ========================================

document.getElementById('creditsToggle').addEventListener('click', function() {
    const content = document.getElementById('creditsContent');
    const icon = document.getElementById('accordionIcon');
    
    content.classList.toggle('active');
    icon.classList.toggle('rotated');
});

// ========================================
// 갤러리 생성
// ========================================

function createGallery() {
    const gallery = document.getElementById('gallery');
    shuffledPhotos.forEach((photo, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = () => openModal(index);
        
        card.innerHTML = `
            <div class="photo-wrapper">
                <img src="images/${photo}" alt="사진 ${index + 1}" onerror="this.src='https://via.placeholder.com/250x250?text=이미지+없음'">
            </div>
        `;
        
        gallery.appendChild(card);
    });
}

// ========================================
// 모달 (확대 보기)
// ========================================

// 모달 열기
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    
    modal.classList.add('active');
    modalImg.src = `images/${shuffledPhotos[index]}`;
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 사진 네비게이션 (이전/다음)
function navigatePhoto(direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) currentPhotoIndex = shuffledPhotos.length - 1;
    if (currentPhotoIndex >= shuffledPhotos.length) currentPhotoIndex = 0;
    
    const modalImg = document.getElementById('modal-img');
    modalImg.src = `images/${shuffledPhotos[currentPhotoIndex]}`;
}

// ========================================
// 키보드 단축키
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigatePhoto(-1);
    if (e.key === 'ArrowRight') navigatePhoto(1);
});

// 모달 배경 클릭시 닫기
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
});

// ========================================
// 페이지 로드시 갤러리 생성
// ========================================

createGallery();

console.log(`✅ 총 ${photos.length}장의 사진이 로드되었습니다.`);

// ========================================
// 음악 플레이어 컨트롤
// ========================================

// 재생/일시정지 버튼
document.getElementById('playPauseBtn').addEventListener('click', function() {
    const icon = document.getElementById('playPauseIcon');
    
    if (bgMusic.paused) {
        bgMusic.play();
        icon.classList.add('paused');  // 일시정지 아이콘
    } else {
        bgMusic.pause();
        icon.classList.remove('paused');  // 재생 아이콘
    }
});

// 다음 곡 버튼
document.getElementById('nextBtn').addEventListener('click', function() {
    currentMusicIndex = (currentMusicIndex + 1) % MUSIC_LIST.length;
    loadMusic(currentMusicIndex);
    bgMusic.play();
    document.getElementById('playPauseIcon').classList.add('paused');
});

// 음악이 끝나면 자동으로 다음 곡
bgMusic.addEventListener('ended', function() {
    currentMusicIndex = (currentMusicIndex + 1) % MUSIC_LIST.length;
    loadMusic(currentMusicIndex);
    bgMusic.play();
});