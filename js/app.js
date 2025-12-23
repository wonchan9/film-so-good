// ========================================
// 설정 영역 (여기만 수정하세요!)
// ========================================

// 이미지 개수 (자동으로 image (1).png ~ image (N).png 생성)
const IMAGE_COUNT = 89;  // ← 이미지 추가/삭제 시 여기만 수정!

// 배경 음악 목록
const MUSIC_LIST = [
    'audio/bgm1.mp3',
    'audio/bgm2.mp3'
];

// ========================================
// 아래는 건드리지 마세요!
// ========================================

// 사진 데이터 자동 생성
const photos = Array.from({length: IMAGE_COUNT}, (_, i) => `image (${i + 1}).png`);

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
const randomMusic = MUSIC_LIST[Math.floor(Math.random() * MUSIC_LIST.length)];
const bgMusic = document.getElementById('bgMusic');
bgMusic.src = randomMusic;

// ========================================
// 입장 화면
// ========================================

document.getElementById('entryButton').addEventListener('click', function() {
    const entryScreen = document.getElementById('entryScreen');
    const mainContent = document.querySelector('.main-content');

    // 음악 재생
    bgMusic.play().catch(e => console.log('음악 재생 실패:', e));

    // 입장 화면 숨기기
    entryScreen.classList.add('hidden');

    // body 스크롤 활성화
    document.body.classList.add('scrollable');

    // 메인 컨텐츠 표시
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 800);
});

// ========================================
// 크레딧 아코디언
// ========================================

document.getElementById('creditsToggle').addEventListener('click', function() {
    const content = document.getElementById('creditsContent');
    content.classList.toggle('active');
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

console.log(`✅ 총 ${IMAGE_COUNT}장의 사진이 로드되었습니다.`);
