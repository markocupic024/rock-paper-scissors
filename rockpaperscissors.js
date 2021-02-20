    // COMPUTER PLAY FUNKCIJA
    function computerPlay() {
        let znakovi = ['kamen', 'papir', 'makaze'];
        let randomBroj = Math.floor(Math.random()*znakovi.length);
        let randomZnak = znakovi[randomBroj];
        return randomZnak;
    }
    let izborKompa = computerPlay()
    // ZA IGRACA
    let kompBodovi = 0
    let igracbodovi = 0
    const kamen = document.getElementById('kamen');
    kamen.addEventListener('click', () => {console.log(playRound ('kamen', izborKompa))
    const rezultatRunde = document.querySelector('p'); rezultatRunde.textContent = playRound ('kamen', izborKompa);
});
    
    const papir = document.getElementById('papir');
    papir.addEventListener('click', () => {console.log(playRound ('papir', izborKompa))
    const rezultatRunde = document.querySelector('p'); rezultatRunde.textContent = playRound ('papir', izborKompa);
   
});

    const makaze = document.getElementById('makaze');
    makaze.addEventListener('click', () => {console.log(playRound ('makaze', izborKompa))
    const rezultatRunde = document.querySelector('p'); rezultatRunde.textContent = playRound ('makaze', izborKompa);
    
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
    
  
  
   
    


    // //  IGRA
    //     let bodoviKomp = 0
    //     let bodoviIgrac = 0
    
    //     let rezultatRunde = playRound();
        
       
        // if (rezultatRunde === 'Komp je papir! Izgubio si!' || rezultatRunde === 'Komp je makaze! Izgubio si!' || rezultatRunde === 'Komp je kamen! Izgubio si!') {
        //     bodoviKomp++;
        //     console.log(`${rezultatRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` )
           
        // }
        // else if (rezultatRunde === 'Komp je kamen! Pobedio si!' || rezultatRunde === 'Komp je papir! Pobedio si!' || rezultatRunde === 'Komp je makaze! Pobedio si!') {
        //     bodoviIgrac++;
        //     console.log(`${rezultatRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` )
            
        // }
        // else if (rezultatRunde === 'Nereseno!') {
        //     bodoviKomp;
        //     bodoviIgrac;
        //     console.log(`${rezultatRunde} Rezultat je: Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}` )
           
        // }
        
       
    
    // let rezultatIgre
    // if (bodoviKomp > bodoviIgrac) {
    // rezultatIgre = `Komp je pobedio! Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}`
   
    // }
    // else if (bodoviIgrac > bodoviKomp) {
    // rezultatIgre = `Ti si pobedio! Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}`
      
    // }
    // else {
    // rezultatIgre = `Nereseno! Tvoji Bodovi : ${bodoviIgrac} Komp bodovi : ${bodoviKomp}`
   
    // }