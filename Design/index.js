const pages = ['home', 'about', 'services', 'portfolio', 'contact', 'faq', 'login', 'signup'];
const noFooter = ['login', 'signup'];

function showPage(name) {
    pages.forEach(p => {
        const el = document.getElementById('page-' + p);
        if (el) el.classList.remove('active');
    });
    const target = document.getElementById('page-' + name);
    if (target) target.classList.add('active');
    document.getElementById('main-footer').style.display = noFooter.includes(name) ? 'none' : 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const pass = document.getElementById('login-password').value;
    if (!email || !pass) { showToast('Please fill in all fields.'); return; }
    showToast('Welcome back! Redirecting to your dashboard...');
    setTimeout(() => showPage('home'), 1800);
}

function handleSignup() {
    showToast('Account created! Welcome to Interior Studio ✦');
    setTimeout(() => showPage('home'), 1800);
}

function submitContact() {
    document.getElementById('contact-success').style.display = 'block';
    showToast("Message sent! We'll be in touch within 24 hours.");
    setTimeout(() => document.getElementById('contact-success').style.display = 'none', 5000);
}

function togglePass(id, icon) {
    const input = document.getElementById(id);
    const i = icon.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        i.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        i.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// Portfolio filter buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});