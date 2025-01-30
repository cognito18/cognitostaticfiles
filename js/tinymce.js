tinymce.init({
    selector: '#id_content',
    plugins: 'image',
    toolbar: 'undo redo | styleselect | bold italic | image | alignleft aligncenter alignright',
    // images_upload_url: '/image_upload/',
    automatic_uploads: true,
    file_picker_types: 'image',
    license_key: 'gpl',
    setup: function (editor) {
        editor.on('init', function () {
            const textarea = document.getElementById('id_content');
            textarea.removeAttribute('required');
        });
    },
});