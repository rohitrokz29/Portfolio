async function getClientInfo() {
    const clientInfo = {};
    clientInfo.os = getClientOS();

    // Get Geolocation
    try {
        const position = await getGeolocation();
        clientInfo.latitude = position.latitude;
        clientInfo.longitude = position.longitude;
    } catch (error) {
        clientInfo.geolocationError = error.message;
    }

    // Get Country and IP Info
    try {
        const ipInfo = await getCountryInfo();
        clientInfo.country = ipInfo.country;
        clientInfo.region = ipInfo.region;
        clientInfo.city = ipInfo.city;
        clientInfo.ip = ipInfo.ip;
    } catch (error) {
        clientInfo.countryError = error.message;
    }

    fetch("/visitor", {
        method: "POST",
        body: JSON.stringify(clientInfo),
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (res.status === 200) return res.json();
        return null;
    }).catch(err => {
        console.log(err);
    })
}

// Detect the client's operating system
function getClientOS() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) return "Windows";
    if (userAgent.indexOf("Mac") !== -1) return "MacOS";
    if (userAgent.indexOf("Linux") !== -1) return "Linux";
    if (userAgent.indexOf("Android") !== -1) return "Android";
    if (userAgent.indexOf("like Mac") !== -1) return "iOS";
    return "Unknown";
}

// Get the geolocation (latitude and longitude)
function getGeolocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    reject(new Error("Geolocation error: " + error.message));
                }
            );
        } else {
            reject(new Error("Geolocation not supported by this browser."));
        }
    });
}


async function getCountryInfo() {
    const API_URL = "https://ipinfo.io?token=1d895efd525f55";
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch IP information.");
    }
    return response.json();
}
getClientInfo();
