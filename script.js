const modalOverlayST = document.getElementById('modalOverlayST');
const modalCloseST = document.getElementById('modalCloseST');
const modalContentST = document.getElementById('modalContentST');
const smokeTrash = document.getElementById('smokeTrash');

const modalOverlaySPA = document.getElementById('modalOverlaySPA');
const modalCloseSPA = document.getElementById('modalCloseSPA');
const modalContentSPA = document.getElementById('modalContentSPA');
const smokePitAngle = document.getElementById('smokePitAngle');

const modalOverlayMPHG = document.getElementById('modalOverlayMPHG');
const modalCloseMPHG = document.getElementById('modalCloseMPHG');
const modalContentMPHG = document.getElementById('modalContentMPHG');
const molyPitHg = document.getElementById('molyPitHg');

const modalOverlayMTM = document.getElementById('modalOverlayMTM');
const modalCloseMTM = document.getElementById('modalCloseMTM');
const modalContentMTM = document.getElementById('modalContentMTM');
const molyTopMid = document.getElementById('molyTopMid');

const modalOverlayFPND = document.getElementById('modalOverlayFPND');
const modalCloseFPND = document.getElementById('modalCloseFPND');
const modalContentFPND = document.getElementById('modalContentFPND');
const flashPitNearDoor = document.getElementById('flashPitNearDoor');

smokeTrash.addEventListener('click', () => {
    modalOverlayST.classList.toggle('hidden');
});

modalCloseST.addEventListener('click', () => {
    modalOverlayST.classList.toggle('hidden');
});

modalOverlayST.addEventListener('click', (e) => {
    if (!modalContentST.contains(e.target)) {
        modalOverlayST.classList.add('hidden');
    }
});

smokePitAngle.addEventListener('click', () => {
    modalOverlaySPA.classList.toggle('hidden');
});

modalCloseSPA.addEventListener('click', () => {
    modalOverlaySPA.classList.toggle('hidden');
});

modalOverlaySPA.addEventListener('click', (e) => {
    if (!modalContentSPA.contains(e.target)) {
        modalOverlaySPA.classList.add('hidden');
    }
});

molyPitHg.addEventListener('click', () => {
    modalOverlayMPHG.classList.toggle('hidden');
});

modalCloseMPHG.addEventListener('click', () => {
    modalOverlayMPHG.classList.toggle('hidden');
});

modalOverlayMPHG.addEventListener('click', (e) => {
    if (!modalContentMPHG.contains(e.target)) {
        modalOverlayMPHG.classList.add('hidden');
    }
});

molyTopMid.addEventListener('click', () => {
    modalOverlayMTM.classList.toggle('hidden');
});

modalCloseMTM.addEventListener('click', () => {
    modalOverlayMTM.classList.toggle('hidden');
});

modalOverlayMTM.addEventListener('click', (e) => {
    if (!modalContentMTM.contains(e.target)) {
        modalOverlayMTM.classList.add('hidden');
    }
});

flashPitNearDoor.addEventListener('click', () => {
    modalOverlayFPND.classList.toggle('hidden');
});

modalCloseFPND.addEventListener('click', () => {
    modalOverlayFPND.classList.toggle('hidden');
});

modalOverlayFPND.addEventListener('click', (e) => {
    if (!modalContentFPND.contains(e.target)) {
        modalOverlayFPND.classList.add('hidden');
    }
});


const smokes = document.querySelectorAll('.smoke');
const molotovs = document.querySelectorAll('.molotov')
const flashes = document.querySelectorAll('.flash')
const btnSmokes = document.getElementById('btnSmokes');
const btnMolotovs = document.getElementById('btnMolotovs');
const btnFlashes = document.getElementById('btnFlashes');
const btnGrenades = document.getElementById('btnGrenades');

btnSmokes.addEventListener('click', () => {
    btnSmokes.classList.toggle('active');
    smokes.forEach((el) => {
        el.classList.toggle('open');
    });
});

btnMolotovs.addEventListener('click', () => {
    btnMolotovs.classList.toggle('active');
    molotovs.forEach((el) => {
        el.classList.toggle('open');
    });
});

btnFlashes.addEventListener('click', () => {
    btnFlashes.classList.toggle('active');
    flashes.forEach((el) => {
        el.classList.toggle('open');
    });
});

// btnGrenades.addEventListener('click', () => {
//     btnGrenades.classList.toggle('active');
//     smokes.forEach((el) => {
//         el.classList.toggle('open');
//     });
// });

const smokeTrashWindOver = document.getElementById('smokeTrashWind');
const smokeTrashConOver = document.getElementById('smokeTrashCon');
const smokeTrashShortOver = document.getElementById('smokeTrashShort');

const videoSTW = document.getElementById('videoSTW');
const videoSTC = document.getElementById('videoSTC');
const videoSTS = document.getElementById('videoSTS');

const modalTitleSTW = document.getElementById('modalTitleSTW');
const modalTitleSTC = document.getElementById('modalTitleSTC');
const modalTitleSTS = document.getElementById('modalTitleSTS');

smokeTrashWindOver.addEventListener('click', () => {
    smokeTrashWindOver.classList.add('active');
    smokeTrashConOver.classList.remove('active');
    smokeTrashShortOver.classList.remove('active');

    videoSTW.classList.add('open');
    videoSTC.classList.remove('open');
    videoSTS.classList.remove('open');

    modalTitleSTW.classList.add('open');
    modalTitleSTC.classList.remove('open');
    modalTitleSTS.classList.remove('open');
})

smokeTrashConOver.addEventListener('click', () => {
    smokeTrashWindOver.classList.remove('active');
    smokeTrashConOver.classList.add('active');
    smokeTrashShortOver.classList.remove('active');

    videoSTW.classList.remove('open');
    videoSTC.classList.add('open');
    videoSTS.classList.remove('open');

    modalTitleSTW.classList.remove('open');
    modalTitleSTC.classList.add('open');
    modalTitleSTS.classList.remove('open');
})

smokeTrashShortOver.addEventListener('click', () => {
    smokeTrashWindOver.classList.remove('active');
    smokeTrashConOver.classList.remove('active');
    smokeTrashShortOver.classList.add('active');

    videoSTW.classList.remove('open');
    videoSTC.classList.remove('open');
    videoSTS.classList.add('open');
    
    modalTitleSTW.classList.remove('open');
    modalTitleSTC.classList.remove('open');
    modalTitleSTS.classList.add('open');
})