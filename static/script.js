var orig = ['Bronchiole c.s','Cheek cell (Squamous)','Cow nerve cells smear','Heart','Heart1',
'Human duodenum sect','Human fibrous tissue tendon sect','Human Liver sect','Human mammary gland active',
'Human pancreas c.s','Human thyroid gland sect','Kidney','Kidney1','Liver Chronic congestion',
'Lung chronic haemorrhage','Mammal large intestine c.s','Mammal Lung sect','Mammal meissner’s corpuscles',
'Mammal tooth adult c.s','Mammal trachea','Membrane bone developin','Omentum flat mount','Pacinian corpuscles',
'Rabbit tongue sect. taste buds','Small intestine','Smooth muscle c.s and l.s']

var filenames = []

function generateImage() {
    // Hide all hidden objects
    document.getElementById('showAnswer').className = 'd-none mb-2 text-center';
    document.getElementById('answerBody').className = 'd-none mb-2 text-center';

    // Get filename
    if (filenames == 0) {
        filenames = orig.slice();
    }

    let filename = filenames[Math.floor(Math.random() * filenames.length)];
    const index = filenames.indexOf(filename);
    filenames.splice(index, 1);
    // console.log(filename + ' has been removed');
    // console.log('new list\n' + filenames);

    // Create img obj
    let tissue = document.createElement('img');
    tissue.src = 'static/images/' + filename + '.png';

    // Insert img
    let imageBody = document.getElementById('imageBody');
    imageBody.innerHTML = '';
    imageBody.appendChild(tissue);

    // Insert answer
    document.getElementById('answerBody').innerHTML = filename;

    // Display show answer button
    document.getElementById('showAnswer').className = 'mb-2 text-center';
}

function showAnswer() {
    // Display answer
    document.getElementById('answerBody').className = 'mb-5 text-center';
}
