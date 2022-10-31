export default (delay = 1000) => {
    if (!process.client) return;

    onMounted(() => {
        useTimeout(() => {
            const els = document.querySelectorAll(".mount-animation");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("show");
                });
            });

            els.forEach((el) => {
                observer.observe(el);
            });
        }, delay);
    });
};
