

let map;
        let markers = [];

        function initMap() {
            map = new google.maps.Map(document.getElementById('mapa-interativo'), {
                center: { lat: -30.0346, lng: -51.2177 }, // Coordenadas do Rio Grande do Sul
                zoom: 12
            });

            const locaisAjuda = [
                {
                    lat: -30.0346, lng: -51.2177, title: 'Defesa Civil',
                    address: 'Rua Exemplo, 123, Porto Alegre, RS', phone: '(51) 1234-5678', whatsapp: 'https://wa.me/555112345678'
                },
                {
                    lat: -30.0356, lng: -51.2178, title: 'Polícia Militar',
                    address: 'Avenida Exemplo, 456, Porto Alegre, RS', phone: '(51) 8765-4321', whatsapp: 'https://wa.me/555187654321'
                },
                {
                    lat: -30.0366, lng: -51.2179, title: 'Centro de Distribuição de Alimentos',
                    address: 'Rua Alimentos, 789, Porto Alegre, RS', phone: '(51) 2345-6789', whatsapp: 'https://wa.me/555123456789'
                },
                {
                    lat: -30.0376, lng: -51.2180, title: 'Abrigo Temporário',
                    address: 'Rua Abrigo, 101, Porto Alegre, RS', phone: '(51) 3456-7890', whatsapp: 'https://wa.me/555134567890'
                },
                {
                    lat: -30.0386, lng: -51.2181, title: 'Serviço Médico',
                    address: 'Avenida Saúde, 202, Porto Alegre, RS', phone: '(51) 4567-8901', whatsapp: 'https://wa.me/555145678901'
                }
            ];

            locaisAjuda.forEach(local => {
                const marker = new google.maps.Marker({
                    position: { lat: local.lat, lng: local.lng },
                    map: map,
                    title: local.title
                });
                markers.push(marker);

                const infoWindow = new google.maps.InfoWindow({
                    content: `
                        <h2>${local.title}</h2>
                        <p>${local.address}</p>
                        <p>Telefone: ${local.phone}</p>
                        <a href="${local.whatsapp}" target="_blank">
                            <button type="button">WhatsApp</button>
                        </a>
                    `
                });

                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
        }