const mapItems = {
    smokeTrash: {
        title: "Smoke: Window/Short",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/XE8Ovi1Y7X4?si=djGquT9H7e2D5oQu" },
            { name: "Short", videoUrl: "https://www.youtube.com/embed/Suy68i7Bfbo?si=0qbXQ_JzbwmA6rSp" }
        ]
    },
    smokePitAngle: {
        title: "Smoke: Ticket",
        targets: [
            { name: "Ticket", videoUrl: "https://www.youtube.com/embed/qu-Um8Y4r98?si=vKIWPqa4vTpSNPuv" }
        ]
    },
    smokeOnTrash: {
        title: "Smoke: Con/Short",
        targets: [
            { name: "Con", videoUrl: "https://www.youtube.com/embed/Xnuu2Ioj5qw?si=G4p5puNyk9tGRVoW" },
            { name: "Short", videoUrl: "https://www.youtube.com/embed/I5sE6MEdDnE?si=qZOnapucuO_oekHr"}
        ]
    },
    smokePitHg: {
        title: "Smoke: Stairs/Conn",
        targets: [
            { name: "Stairs (LMB+RMB)", videoUrl: "https://www.youtube.com/embed/hQwc09yd8RY?si=jExlEMi1DEbn8oBi" },
            { name: "Conn", videoUrl: "https://www.youtube.com/embed/Ql2GnyjUtzc?si=wx5ZkpbK3rUXH_Ys" }
        ]
    },
    smokeBMainAngle: {
        title: "Smoke:  Window/Main",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/5SnW04vWk68?si=QNEuqI1OwZ3IjGGs" },
            { name: "Main", videoUrl: "https://www.youtube.com/embed/GXFicWh8OyM?si=FRbZ-BoykINMiJ5b" }
        ]
    },
    molyTopMid: {
        title: "Molotov: Top Mid",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    flashPitNearDoor: {
        title: "Flash: A site",
        targets: [
            { name: "A site", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    nadeJungleAngle: {
        title: "Grenade: Pit",
        targets: [
            { name: "Pit start", videoUrl: "https://www.youtube.com/embed/7J9JXoSAAI4?si=Bi9V8xVKTKOsvwOl" },
            { name: "Pit center", videoUrl: "https://www.youtube.com/embed/e-mURA_RWyQ?si=9fLxPtV7yEOsmXhW" }
        ]
    },
    nadeJWindow: {
        title: "Grenade: Window",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/xlAcxVyaLT8?si=pTGMzIIPXkxzBX5X" }
        ]
    },
    smokeTetris: {
        title: "Smoke: Stairs",
        targets: [
            { name: "Stairs", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    smokeBehindBox: {
        title: "Smoke: Window",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    molyBehindBox: {
        title: "Molotov: Window",
        targets: [
            { name: "Window", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    molyBSide: {
        title: "Molotov: B Aps",
        targets: [
            { name: "B Aps", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
    flashUnderPalace: {
        title: "Flash: Pit",
        targets: [
            { name: "Pit", videoUrl: "https://www.youtube.com/embed/_JpgpaiirIo?si=T--pFRDBBUV_uX2A" }
        ]
    },
};

const modalOverlay = document.getElementById('globalModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const modalTabs = document.getElementById('modalTabs');
const videoContainer = document.getElementById('videoContainer');

function openModal(itemId) {
    const data = mapItems[itemId];
    if (!data) return;

    modalTitle.textContent = data.title;
    
    modalTabs.innerHTML = '';
    videoContainer.innerHTML = '';

    data.targets.forEach((target, index) => {
        const btn = document.createElement('button');
        btn.className = `btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = target.name;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('#modalTabs .btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            loadVideo(target.videoUrl);
        });

        modalTabs.appendChild(btn);
    });

    loadVideo(data.targets[0].videoUrl);

    modalOverlay.classList.remove('hidden');
}

function loadVideo(url) {
    videoContainer.innerHTML = `
        <iframe width="960" height="500" 
            src="${url}" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    `;
}

document.querySelectorAll('.map-item').forEach(item => {
    item.addEventListener('click', (e) => {
        openModal(e.target.id);
    });
});

function closeModal() {
    modalOverlay.classList.add('hidden');
    videoContainer.innerHTML = '';
}

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});


const filterButtons = document.querySelectorAll('.filter-btn');
const SideFilterButtons = document.querySelectorAll('.side')


filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const type = btn.getAttribute('data-type');
        const itemsOnMap = document.querySelectorAll(`.${type}`);
        
        itemsOnMap.forEach(item => {
            item.classList.toggle('open');
        });
    });
});

const mapChanger = document.getElementById('mapChanger');

mapChanger.addEventListener('click', () => {

    document.querySelectorAll('.map').forEach(item => {
        item.classList.toggle('open');  
    })
})

const radioAudio = new Audio('buster.mp3');
radioAudio.loop = true; 
radioAudio.volume = 0.3; 
const radioBtn = document.getElementById('radio-btn');

radioBtn.addEventListener('click', () => {
  if (radioAudio.paused) {
    radioAudio.play();
  } 
  else {
    radioAudio.pause();
  }
});

const globalModalCommands = document.getElementById('globalModalCommands');
const closeModalBtnCommands = document.getElementById('closeModalBtnCommands');
const modalTitleCommands = document.getElementById('modalTitleCommands');
const ConsoleCommands = document.getElementById('ConsoleCommands');
const modalContentCommands = document.getElementById('modalContentCommands');

ConsoleCommands.addEventListener(('click'), () => {
    globalModalCommands.classList.toggle('hidden');
})

closeModalBtnCommands.addEventListener(('click'), () => {
    globalModalCommands.classList.toggle('hidden');
})

globalModalCommands.addEventListener('click', (e) => {
    if (!modalContentCommands.contains(e.target)) {
        globalModalCommands.classList.toggle('hidden');
    }
})
