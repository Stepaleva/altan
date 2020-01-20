var map;

            DG.then(function () {
                map = DG.map('map', {
                    center: [62.032918, 129.750335],
                    zoom: 16
                });

                DG.marker([62.032918, 129.750335]).addTo(map).bindPopup('Мы тут!:))');
            });