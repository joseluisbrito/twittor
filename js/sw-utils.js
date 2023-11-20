// Guardar en el cache dinamico:
function actualizarCacheDinamico(dynamicCache, req, res) {
    if(res.ok) {
        // entonces hay data de la respuesta para almacenar en el cache
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        // si no viene nada, regresa lo mismo que viene en la respuesta
        return res;
    }
}