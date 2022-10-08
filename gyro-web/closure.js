function setupGyro(targetElement, dataHandler){
    console.log('hello setupGyro');
    return targetElement.addEventListener('click', () => {
        try {
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
                // iOS 13+ devices
                DeviceMotionEvent.requestPermission()
                .then((state) => {
                    if (state === 'granted') {
                        window.addEventListener('devicemotion', dataHandler);
                    } else {
                        console.error('Request to access the orientation was rejected');
                    }
                })
            } else {
                // Non iOS 13+ devices
                window.addEventListener('devicemotion', dataHandler);
            }
        } catch (error) {
            // Handle desktop browsers
            console.error('DeviceMotion Events not supported in this browser');
        }
    });
}
export default setupGyro;
export { setupGyro };