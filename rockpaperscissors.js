    // RADI ALI JE KOD KATASTROFA
    // COMPUTER PLAY FUNKCIJA
    function computerPlay() {
        let znakovi = ['kamen', 'papir', 'makaze'];
        let randomBroj = Math.floor(Math.random()*znakovi.length);
        let randomZnak = znakovi[randomBroj];
        return randomZnak;
    }
    let bodoviKomp = 0
    let bodoviIgrac = 0
    // ZA IGRACA
    const kamen = document.getElementById('kamen');
    kamen.addEventListener('click', () => {let izborKompa = computerPlay() 
    const rezultatRunde = document.querySelector('p');
    let rezultatiRunde = playRound ('kamen', izborKompa);
    if (rezultatiRunde === 'Komp je papir! Izgubio si!' || rezultatiRunde === 'Komp je makaze! Izgubio si!' || rezultatiRunde === 'Komp je kamen! Izgubio si!') {
        bodoviKomp++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
    else if (rezultatiRunde === 'Komp je kamen! Pobedio si!' || rezultatiRunde === 'Komp je papir! Pobedio si!' || rezultatiRunde === 'Komp je makaze! Pobedio si!') {
        bodoviIgrac++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
        
    }
    else if (rezultatiRunde === 'Nereseno!') {
        bodoviKomp;
        bodoviIgrac;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
});
    
    const papir = document.getElementById('papir');
    papir.addEventListener('click', () => {let izborKompa = computerPlay() 
    const rezultatRunde = document.querySelector('p'); 
    let rezultatiRunde = playRound ('papir', izborKompa);
    if (rezultatiRunde === 'Komp je papir! Izgubio si!' || rezultatiRunde === 'Komp je makaze! Izgubio si!' || rezultatiRunde === 'Komp je kamen! Izgubio si!') {
        bodoviKomp++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
    else if (rezultatiRunde === 'Komp je kamen! Pobedio si!' || rezultatiRunde === 'Komp je papir! Pobedio si!' || rezultatiRunde === 'Komp je makaze! Pobedio si!') {
        bodoviIgrac++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
        
    }
    else if (rezultatiRunde === 'Nereseno!') {
        bodoviKomp;
        bodoviIgrac;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
});

    const makaze = document.getElementById('makaze');
    makaze.addEventListener('click', () => {let izborKompa = computerPlay()
    const rezultatRunde = document.querySelector('p'); 
    let rezultatiRunde = playRound ('makaze', izborKompa);
    if (rezultatiRunde === 'Komp je papir! Izgubio si!' || rezultatiRunde === 'Komp je makaze! Izgubio si!' || rezultatiRunde === 'Komp je kamen! Izgubio si!') {
        bodoviKomp++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
    else if (rezultatiRunde === 'Komp je kamen! Pobedio si!' || rezultatiRunde === 'Komp je papir! Pobedio si!' || rezultatiRunde === 'Komp je makaze! Pobedio si!') {
        bodoviIgrac++;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
        
    }
    else if (rezultatiRunde === 'Nereseno!') {
        bodoviKomp;
        bodoviIgrac;
        rezultatRunde.textContent = `${rezultatiRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` 
       
    }
});

    // REZULTAT
    function playRound (izborIgraca, izborKompa) {
        
        let rezultat
        if (izborIgraca === 'kamen' && izborKompa === 'papir') {
            return rezultat = 'Komp je papir! Izgubio si!'
        }
        else if (izborIgraca === 'papir' && izborKompa === 'kamen') {
            return rezultat = 'Komp je kamen! Pobedio si!'
        }
        else if (izborIgraca === 'papir' && izborKompa === 'makaze') {
            return rezultat = 'Komp je makaze! Izgubio si!'
        }
        else if (izborIgraca === 'makaze' && izborKompa === 'papir') {
            return rezultat = 'Komp je papir! Pobedio si!'
        }
        else if (izborIgraca === 'kamen' && izborKompa === 'makaze') {
            return rezultat = 'Komp je makaze! Pobedio si!'
        }
        else if (izborIgraca === 'makaze' && izborKompa === 'kamen') {
            return rezultat = 'Komp je kamen! Izgubio si!'
        }
        else if (izborIgraca === 'papir' && izborKompa === 'papir') {
            return rezultat = 'Nereseno!'
        }
        else if (izborIgraca === 'kamen' && izborKompa === 'kamen') {
            return rezultat = 'Nereseno!'
        }
        else if (izborIgraca === 'makaze' && izborKompa === 'makaze') {
            return rezultat = 'Nereseno!'
        }
    }
    
   