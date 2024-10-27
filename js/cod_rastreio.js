const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

function generateTrackingCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let trackingCode = '';
    for (let i = 0; i < 8; i++) {
        trackingCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return trackingCode;
}

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        const trackingCode = generateTrackingCode();
        appendAlert(`Sua doação foi registrada com sucesso! Código de rastreio: ${trackingCode}`, 'success');
    });
}