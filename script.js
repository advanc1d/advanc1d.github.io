const modalOverlayST = document.getElementById('modalOverlayST');
const modalCloseST = document.getElementById('modalCloseST');
const modalContentST = document.getElementById('modalContentST');
const smokeTrash = document.getElementById('smokeTrash');

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

const modalOverlaySPA = document.getElementById('modalOverlaySPA');
const modalCloseSPA = document.getElementById('modalCloseSPA');
const modalContentSPA = document.getElementById('modalContentSPA');
const smokePitAngle = document.getElementById('smokePitAngle');

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

const modalOverlaySPHG = document.getElementById('modalOverlaySPHG');
const modalCloseSPHG = document.getElementById('modalCloseSPHG');
const modalContentSPHG = document.getElementById('modalContentSPHG');
const smokePitHG = document.getElementById('smokePitHg');

smokePitHG.addEventListener('click', () => {
    modalOverlaySPHG.classList.toggle('hidden');
});

modalCloseSPHG.addEventListener('click', () => {
    modalOverlaySPHG.classList.toggle('hidden');
});

modalOverlaySPHG.addEventListener('click', (e) => {
    if (!modalContentSPHG.contains(e.target)) {
        modalOverlaySPHG.classList.add('hidden');
    }
});

const modalOverlayMTM = document.getElementById('modalOverlayMTM');
const modalCloseMTM = document.getElementById('modalCloseMTM');
const modalContentMTM = document.getElementById('modalContentMTM');
const molyTopMid = document.getElementById('molyTopMid');

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

const modalOverlayFPND = document.getElementById('modalOverlayFPND');
const modalCloseFPND = document.getElementById('modalCloseFPND');
const modalContentFPND = document.getElementById('modalContentFPND');
const flashPitNearDoor = document.getElementById('flashPitNearDoor');

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

const modalOverlaySBMA = document.getElementById('modalOverlaySBMA');
const modalCloseSBMA = document.getElementById('modalCloseSBMA');
const modalContentSBMA = document.getElementById('modalContentSBMA');
const smokeBMainAngle = document.getElementById('smokeBMainAngle');

smokeBMainAngle.addEventListener('click', () => {
    modalOverlaySBMA.classList.toggle('hidden');
});

modalCloseSBMA.addEventListener('click', () => {
    modalOverlaySBMA.classList.toggle('hidden');
});

modalOverlaySBMA.addEventListener('click', (e) => {
    if (!modalContentSBMA.contains(e.target)) {
        modalOverlaySBMA.classList.add('hidden');
    }
});

const modalOverlaySOT = document.getElementById('modalOverlaySOT');
const modalCloseSOT = document.getElementById('modalCloseSOT');
const modalContentSOT = document.getElementById('modalContentSOT');
const smokeOnTrash = document.getElementById('smokeOnTrash');

smokeOnTrash.addEventListener('click', () => {
    modalOverlaySOT.classList.toggle('hidden');
});

modalCloseSOT.addEventListener('click', () => {
    modalOverlaySOT.classList.toggle('hidden');
});

modalOverlaySOT.addEventListener('click', (e) => {
    if (!modalContentSOT.contains(e.target)) {
        modalOverlaySOT.classList.add('hidden');
    }
});

const modalOverlayGJA = document.getElementById('modalOverlayGJA');
const modalCloseGJA = document.getElementById('modalCloseGJA');
const modalContentGJA = document.getElementById('modalContentGJA');
const nadeJungleAngle = document.getElementById('nadeJungleAngle');

nadeJungleAngle.addEventListener('click', () => {
    modalOverlayGJA.classList.toggle('hidden');
});

modalCloseGJA.addEventListener('click', () => {
    modalOverlayGJA.classList.toggle('hidden');
});

modalOverlayGJA.addEventListener('click', (e) => {
    if (!modalContentGJA.contains(e.target)) {
        modalOverlayGJA.classList.add('hidden');
    }
});

const smokes = document.querySelectorAll('.smoke');
const molotovs = document.querySelectorAll('.molotov')
const flashes = document.querySelectorAll('.flash')
const grenades = document.querySelectorAll('.grenade')
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

btnGrenades.addEventListener('click', () => {
    btnGrenades.classList.toggle('active');
    grenades.forEach((el) => {
        el.classList.toggle('open');
    });
});

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
    smokeTrashShortOver.classList.remove('active');

    videoSTW.classList.add('open');
    videoSTS.classList.remove('open');

    modalTitleSTW.classList.add('open');
    modalTitleSTS.classList.remove('open');
})

smokeTrashShortOver.addEventListener('click', () => {
    smokeTrashWindOver.classList.remove('active');
    smokeTrashShortOver.classList.add('active');

    videoSTW.classList.remove('open');
    videoSTS.classList.add('open');
    
    modalTitleSTW.classList.remove('open');
    modalTitleSTS.classList.add('open');
})

const smokePHGS = document.getElementById('smokePHGS');
const smokePHGC = document.getElementById('smokePHGC');

const videoSPHGS = document.getElementById('videoSPHGS');
const videoSPHGC = document.getElementById('videoSPHGC');

const modalTitleSPHGS = document.getElementById('modalTitleSPHGS');
const modalTitleSPHGC = document.getElementById('modalTitleSPHGC');

smokePHGS.addEventListener('click', () => {
    smokePHGS.classList.add('active');
    smokePHGC.classList.remove('active');

    videoSPHGS.classList.add('open');
    videoSPHGC.classList.remove('open');

    modalTitleSPHGS.classList.add('open');
    modalTitleSPHGC.classList.remove('open');
})

smokePHGC.addEventListener('click', () => {
    smokePHGS.classList.remove('active');
    smokePHGC.classList.add('active');

    videoSPHGS.classList.remove('open');
    videoSPHGC.classList.add('open');

    modalTitleSPHGS.classList.remove('open');
    modalTitleSPHGC.classList.add('open');
})

const smokeSBMAW = document.getElementById('smokeSBMAW');
const smokeSBMAD = document.getElementById('smokeSBMAD');

const videoSBMAW = document.getElementById('videoSBMAW');
const videoSBMAD = document.getElementById('videoSBMAD');

const modalTitleSBMAW = document.getElementById('modalTitleSBMAW');
const modalTitleSBMAD = document.getElementById('modalTitleSBMAD');

smokeSBMAW.addEventListener('click', () => {
    smokeSBMAW.classList.add('active');
    smokeSBMAD.classList.remove('active');

    videoSBMAW.classList.add('open');
    videoSBMAD.classList.remove('open');

    modalTitleSBMAW.classList.add('open');
    modalTitleSBMAD.classList.remove('open');
})

smokeSBMAD.addEventListener('click', () => {
    smokeSBMAW.classList.remove('active');
    smokeSBMAD.classList.add('active');

    videoSBMAW.classList.remove('open');
    videoSBMAD.classList.add('open');

    modalTitleSBMAW.classList.remove('open');
    modalTitleSBMAD.classList.add('open');
})

const smokeSOTC = document.getElementById('smokeSOTC');
const smokeSOTS = document.getElementById('smokeSOTS');

const videoSOTC = document.getElementById('videoSOTC');
const videoSOTS = document.getElementById('videoSOTS');

const modalTitleSOTC = document.getElementById('modalTitleSOTC');
const modalTitleSOTS = document.getElementById('modalTitleSOTS');

smokeSOTC.addEventListener('click', () => {
    smokeSOTC.classList.add('active');
    smokeSOTS.classList.remove('active');

    videoSOTC.classList.add('open');
    videoSOTS.classList.remove('open');

    modalTitleSOTC.classList.add('open');
    modalTitleSOTS.classList.remove('open');
})

smokeSOTS.addEventListener('click', () => {
    smokeSOTC.classList.remove('active');
    smokeSOTS.classList.add('active');

    videoSOTC.classList.remove('open');
    videoSOTS.classList.add('open');

    modalTitleSOTC.classList.remove('open');
    modalTitleSOTS.classList.add('open');
})

const nadeGJASP = document.getElementById('nadeGJASP');
const nadeGJACP = document.getElementById('nadeGJACP');

const videoGJASP = document.getElementById('videoGJASP');
const videoGJACP = document.getElementById('videoGJACP');

const modalTitleGJASP = document.getElementById('modalTitleGJASP');
const modalTitleGJACP = document.getElementById('modalTitleGJACP');

nadeGJASP.addEventListener('click', () => {
    nadeGJASP.classList.add('active');
    nadeGJACP.classList.remove('active');

    videoGJASP.classList.add('open');
    videoGJACP.classList.remove('open');

    modalTitleGJASP.classList.add('open');
    modalTitleGJACP.classList.remove('open');
})

nadeGJACP.addEventListener('click', () => {
    nadeGJASP.classList.remove('active');
    nadeGJACP.classList.add('active');

    videoGJASP.classList.remove('open');
    videoGJACP.classList.add('open');

    modalTitleGJASP.classList.remove('open');
    modalTitleGJACP.classList.add('open');
})
