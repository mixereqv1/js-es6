const ob1 = {
    container: document.querySelector('#container'),
    favouriteColors: ['#30A9DE','#F6B352','#56A902','#F9320C','#181842'],
    create: function() {
        const bg = Math.floor(Math.random() * 5);
        const div = document.createElement('div');
        div.className = 'element';
        div.style.backgroundColor = this.favouriteColors[bg];
        div.innerText = this.favouriteColors[bg];
        this.container.appendChild(div);
    },
    bind: function() {
        const button = document.querySelector('button');
        button.addEventListener('click', this.create.bind(this));
    }
}
ob1.bind();