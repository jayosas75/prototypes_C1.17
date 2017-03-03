$(document).ready(function(){
    $('tbody').on('click', '.delete', function(){
        var studentKey = $(this).closest('td').attr('data-uid');
        delete_student(studentKey, $(this));
    })
});

// harder Firebase Intro Prototype js file
var config = {
    apiKey: "AIzaSyCJidWiQiVID31yk3pRyWqIS2sDSeD3d0M",
    authDomain: "challenge-d993f.firebaseapp.com",
    databaseURL: "https://challenge-d993f.firebaseio.com",
    storageBucket: "challenge-d993f.appspot.com",
    messagingSenderId: "857300238468"
};

//DID HARD VERSION ONLY

firebase.initializeApp(config);

var student_ref = firebase.database();

var new_student1 = {
    name: 'Andy',
    student_id: 4,
    course: 'Hip Hop 200',
    grade: 100
};
var new_student2 = {
    name: 'Derrick',
    student_id: 5,
    course: 'Diaper Changing',
    grade: 69
};
//push methods
student_ref.ref('Students').push(new_student1);
student_ref.ref('Students').push(new_student2);

//update method
var updates = {};
updates['Students/1/name'] = 'Johnny';
student_ref.ref().update(updates);

//remove / set(null) method
function delete_student(key, ele){
    if(confirm('Do you want to delete Student?') == true){
        student_ref.ref('Students/' + key).remove();
    } else {
        console.log('Chose not to delete student');
    }
}

//read data and updateDom Function called
student_ref.ref('Students').on('value', function(snapshot){
    console.log('snapshot is: ', snapshot.val());
    updateDom(snapshot.val());
});


function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            var row = $('<tr>');
            var id = $('<td class="sid">' + d[key].student_id + '</td>');
            var name = $('<td class="sname">' + d[key].name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
            });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'
            });

            table.append(row.append(id, name, course, grade, actions.append(edit, del)));
        }
    }
}

function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}

function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });

    return output;
}

function populateFormData(sid, sname, course, grade){
    $('#sid').val(sid);
    $('#sname').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}

function getRowData(e) {
    return {
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}