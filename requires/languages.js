const fs = require('fs');
const path = require('path');

// Ana dizindeki "languages" klasörünü belirtin
const languagesDirectory = path.join(__dirname, '..', 'languages');

// Dil dosyalarını bir nesne içine toplamak için boş bir nesne oluşturun
const languages = {};

// Dil dosyalarını okuyun ve içeri aktarın
fs.readdirSync(languagesDirectory).forEach(file => {
    // Dosya adını anahtar olarak kullanarak dil dosyasını içe aktarın
    const language = require(path.join(languagesDirectory, file));
    // Dosya adından ".js" uzantısını kaldırarak dil adını alın
    const languageName = path.basename(file, '.js');
    // Dil adını anahtar olarak kullanarak dil dosyasını nesneye ekleyin
    languages[languageName] = language;
});

module.exports = languages;
