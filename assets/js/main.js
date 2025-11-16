const toggleBtn = document.getElementById('mobile-menu-toggle');
const closeBtn = document.getElementById('close-mobile-menu');
const menu = document.getElementById('mobile-menu');
const overlay = document.querySelector('.overlay');

let isMenuOpen = false;

function openMenu() {
  menu.classList.remove('hidden');
  overlay.classList.remove('hidden');
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');

  requestAnimationFrame(() => {
    menu.classList.add('show');
    isMenuOpen = true;
  });
}

function closeMenu() {
  menu.classList.remove('show');
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  isMenuOpen = false;

  setTimeout(() => {
    menu.classList.add('hidden');
    overlay.classList.add('hidden'); 
  }, 300);
}

toggleBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!isMenuOpen) openMenu();
});

closeBtn?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if (isMenuOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const dropdown = this.nextElementSibling;
      const icon = this.querySelector('.fa-chevron-down');
  
      dropdown.classList.toggle('show');
  
      icon.classList.toggle('rotate-180');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
      const languageButton = document.getElementById('language-button-desktop');
      const languageMenu = document.getElementById('language-menu-desktop');
      const chevronIcon = languageButton.querySelector('.fas.fa-chevron-down');
      
      if (!languageButton || !languageMenu || !chevronIcon) {
        return;
      }
      
      languageButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleDesktopDropdown();
      });
      
      // Toggle function
      function toggleDesktopDropdown() {
        const isHidden = languageMenu.style.display === 'none' || languageMenu.classList.contains('hidden');
        
        if (isHidden) {
          languageMenu.style.display = 'block';
          languageMenu.classList.remove('hidden');
          chevronIcon.style.transform = 'rotate(180deg)';
        } else {
          languageMenu.style.display = 'none';
          languageMenu.classList.add('hidden');
          chevronIcon.style.transform = 'rotate(0deg)';
        }
      }
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
          languageMenu.style.display = 'none';
          languageMenu.classList.add('hidden');
          chevronIcon.style.transform = 'rotate(0deg)';
        }
      });
      
      // Handle language selection
      const languageOptions = languageMenu.querySelectorAll('a[data-lang]');
      languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
          e.preventDefault();
          const selectedLang = this.getAttribute('data-lang');
          document.getElementById('selected-language-desktop').textContent = selectedLang;
          languageMenu.style.display = 'none';
          languageMenu.classList.add('hidden');
          chevronIcon.style.transform = 'rotate(0deg)';
        });
      });
      
      // Mobile language dropdown
      const mobileLanguageButton = document.getElementById('language-button-mobile');
      const mobileLanguageMenu = document.getElementById('language-menu-mobile');
      const mobileChevronIcon = mobileLanguageButton?.querySelector('.fas.fa-chevron-down');
      
      if (mobileLanguageButton && mobileLanguageMenu && mobileChevronIcon) {
        // Mobile toggle function
        function toggleMobileDropdown() {
          const isHidden = mobileLanguageMenu.style.display === 'none' || mobileLanguageMenu.classList.contains('hidden');
          
          if (isHidden) {
            mobileLanguageMenu.style.display = 'block';
            mobileLanguageMenu.classList.remove('hidden');
            mobileChevronIcon.style.transform = 'rotate(180deg)';
          } else {
            mobileLanguageMenu.style.display = 'none';
            mobileLanguageMenu.classList.add('hidden');
            mobileChevronIcon.style.transform = 'rotate(0deg)';
          }
        }
        
        mobileLanguageButton.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          toggleMobileDropdown();
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
          if (!mobileLanguageButton.contains(event.target) && !mobileLanguageMenu.contains(event.target)) {
            mobileLanguageMenu.style.display = 'none';
            mobileLanguageMenu.classList.add('hidden');
            mobileChevronIcon.style.transform = 'rotate(0deg)';
          }
        });
        
        // Handle mobile language selection
        const mobileLanguageOptions = mobileLanguageMenu.querySelectorAll('a[data-lang]');
        mobileLanguageOptions.forEach(option => {
          option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            document.getElementById('selected-language-mobile').textContent = selectedLang;
            mobileLanguageMenu.style.display = 'none';
            mobileLanguageMenu.classList.add('hidden');
            mobileChevronIcon.style.transform = 'rotate(0deg)';
          });
        });
      }
    });

// faq js
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Close all other answers
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== this) {
          const otherAnswer = otherQuestion.nextElementSibling;
          const otherIcon = otherQuestion.querySelector('i');
          otherAnswer.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });
      
      // Toggle current answer
      answer.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});
  function showToaster(message, type = 'success') {
        const toaster = document.createElement('div');
        toaster.className = 'toaster';
        toaster.innerHTML = `
          <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
          <span>${message}</span>
        `;
        
        if (type === 'error') {
          toaster.style.background = '#ef4444';
        }
        
        document.body.appendChild(toaster);
        
        setTimeout(() => toaster.classList.add('show'), 100);
        
        setTimeout(() => {
          toaster.classList.remove('show');
          setTimeout(() => document.body.removeChild(toaster), 300);
        }, 3000);
      }
      
      function copyLink() {
        const linkInput = document.querySelector('input[value="https://example.com/article-link"]');
        if (linkInput) {
          navigator.clipboard.writeText(linkInput.value).then(() => {
            showToaster('Link copied to clipboard!');
          }).catch(() => {
            showToaster('Failed to copy link', 'error');
          });
        }
      }
// Price Range Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const priceSlider = document.querySelector('.slider');
  const minPriceInput = document.querySelector('input[value="199"]');
  const maxPriceInput = document.querySelector('input[value="$1,299"]');
  const sliderValue = document.querySelector('.bg-primary.text-white.text-xs');
  
  if (priceSlider && minPriceInput && maxPriceInput && sliderValue) {
    // Update slider value display
    function updateSliderDisplay(value) {
      sliderValue.textContent = `$${value}`;
    }
    
    // Handle slider change
    priceSlider.addEventListener('input', function() {
      const value = this.value;
      updateSliderDisplay(value);
      maxPriceInput.value = `$${value}`;
    });
    
    // Handle min price input change
    minPriceInput.addEventListener('input', function() {
      let value = this.value.replace('$', '').replace(',', '');
      if (value && !isNaN(value)) {
        value = Math.max(0, Math.min(parseInt(value), 2000));
        this.value = value;
      }
    });
    
    // Handle max price input change
    maxPriceInput.addEventListener('input', function() {
      let value = this.value.replace('$', '').replace(',', '');
      if (value && !isNaN(value)) {
        value = Math.max(0, Math.min(parseInt(value), 2000));
        this.value = `$${value}`;
        priceSlider.value = value;
        updateSliderDisplay(value);
      }
    });
  }
});

// Tab switching logic
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    tabButtons.forEach(b => {
      b.classList.remove('active', 'text-primary', 'border-primary', 'bg-white');
      b.classList.add('text-gray-600');
    });
    tabContents.forEach(tc => tc.classList.add('hidden'));
    this.classList.add('active', 'text-primary', 'border-primary', 'bg-white');
    this.classList.remove('text-gray-600');
    const tab = this.getAttribute('data-tab');
    document.getElementById(tab).classList.remove('hidden');
  });
});
// Review form submission (front-end only)
const reviewForm = document.getElementById('review-form');
const reviewSuccess = document.getElementById('review-success');
if (reviewForm && reviewSuccess) {
  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    reviewSuccess.classList.remove('hidden');
    reviewForm.reset();
    setTimeout(() => {
      reviewSuccess.classList.add('hidden');
    }, 3000);
  });
}


// Color selection
document.querySelectorAll('.color-select label').forEach(label => {
    label.addEventListener('click', function() {
        // Reset all color options
        document.querySelectorAll('.color-select label').forEach(l => {
            l.classList.remove('border-primary', 'shadow-lg');
            l.classList.add('border-transparent');
        });
        
        // Apply active state to clicked color
        this.classList.remove('border-transparent');
        this.classList.add('border-primary', 'shadow-lg');
        
        // Check the radio button
        this.querySelector('input').checked = true;
    });
});

// Size selection
document.querySelectorAll('.size-select input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Reset all size options
        document.querySelectorAll('.size-select label div').forEach(div => {
            div.classList.remove('border-primary', 'bg-primary', 'text-white');
            div.classList.add('border-gray-300');
        });
        
        // Apply active state to selected size
        const selectedDiv = this.nextElementSibling;
        selectedDiv.classList.remove('border-gray-300');
        selectedDiv.classList.add('border-primary', 'bg-primary', 'text-white');
    });
});


  // counter js
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K+' : target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) >= 1000 ? (Math.floor(start) / 1000).toFixed(0) + 'K+' : Math.floor(start) + '+';
      }
    }, 16);
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-count]').forEach(counter => {
      observer.observe(counter);
    });
  });


  // Product Image Slider + Thumbnails
var sliderThumbnail = new Swiper(".thumbnail-slider", {
  slidesPerView: 3,
  spaceBetween: 15,
  speed: 500,
  centeredSlides: false,
  centeredSlidesBounds: true,
  watchOverflow: true,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
  },
});
var sliderMain = new Swiper(".main-image-slider", {
  spaceBetween: 15,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed: 500,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next.pdp-arrow',
    prevEl: '.swiper-button-prev.pdp-arrow',
  },
  thumbs: {
    swiper: sliderThumbnail
  }
});
sliderMain.on('slideChangeTransitionStart', function () {
  sliderThumbnail.slideTo(sliderMain.activeIndex);
});
sliderThumbnail.on('transitionStart', function () {
  sliderMain.slideTo(sliderThumbnail.activeIndex);
});

  // collection slider
if (document.querySelector('.collection-slider')) {
    const teamSwiper = new Swiper('.collection-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      grid: {
        rows: 1,
        fill: 'row',
      },
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      roundLengths: true,
      navigation: {
        nextEl: '.collection-arrow.swiper-button-next',
        prevEl: '.collection-arrow.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        1024: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        1280: {
          slidesPerView: 4,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
}

  // category slider
if (document.querySelector('.category-slider')) {
    const categorySwiper = new Swiper('.category-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      roundLengths: true,
      navigation: {
        nextEl: '.category-arrow.swiper-button-next',
        prevEl: '.category-arrow.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    });
}

// Testimonial Slider
if (document.querySelector('.testimonial-slider')) {
  const testimonialSwiper = new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      speed: 500,
      navigation: {
        nextEl: ".testimonial-arrow.swiper-button-next",
        prevEl: ".testimonial-arrow.swiper-button-prev",
      },
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
     
  });
}
// blog swiper
if (document.querySelector('.blog-slider')) {
  const blogSwiper = new Swiper('.blog-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      speed: 500,
      navigation: {
        nextEl: ".blog-arrow.swiper-button-next",
        prevEl: ".blog-arrow.swiper-button-prev",
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1280: {
              slidesPerView: 4,
              spaceBetween: 24,
          },
      }
  });
}

 // related slider
  if (document.querySelector('.related-slider')) {
    const teamSwiper = new Swiper('.related-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      roundLengths: true,
      navigation: {
        nextEl: '.related-arrow.swiper-button-next',
        prevEl: '.related-arrow.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    });
}
 // team slider
  if (document.querySelector('.team-slider')) {
    const teamSwiper = new Swiper('.team-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 500,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      roundLengths: true,
      navigation: {
        nextEl: '.team-arrow.swiper-button-next',
        prevEl: '.team-arrow.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },
    });
}



// Custom Date Picker
function createCustomDatePicker() {
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.style.display = 'none';

    const container = document.createElement('div');
    container.className = 'custom-date-picker relative focus:ring-primary focus:border-primary w-full';

    const displayInput = Object.assign(document.createElement('input'), {
      type: 'text',
      className: input.className,
      placeholder: 'Select date',
      readOnly: true,
      style: 'cursor: pointer'
    });

    const dropdown = document.createElement('div');
    dropdown.className = 'absolute z-50 top-full left-0 w-full bg-white border border-gray-300 shadow-lg hidden';

    const calendar = document.createElement('div');
    calendar.className = 'p-3';
    dropdown.appendChild(calendar);
    container.append(displayInput, dropdown);
    input.parentNode.insertBefore(container, input);

    let currentDate = new Date(), selectedDate = null;

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      calendar.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <button class="prev-month flex items-center justify-center w-9 text-primary p-2"><i class="fas fa-chevron-left"></i></button>
                    <h3 class="font-semibold text-sm">${currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                    <button class="next-month flex items-center justify-center w-9 text-primary p-2"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm mb-1">
                    ${['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => `<div class="font-medium text-gray-600 p-2">${d}</div>`).join('')}
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm" id="calendar-days"></div>
            `;

      const daysContainer = calendar.querySelector('#calendar-days');
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      daysContainer.innerHTML = '<div class="p-2"></div>'.repeat(firstDay);

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);
        const isToday = date.getTime() === today.getTime();
        const isSelected = selectedDate?.getTime() === date.getTime();
        const isPast = date < today;

        let classes = 'flex items-center justify-center p-1.5 leading-none transition-colors duration-300';
        if (isPast) {
          classes += ' text-gray-300 cursor-not-allowed';
        } else {
          classes += ' cursor-pointer hover:bg-primary hover:text-white';
          if (isToday && !isSelected) classes += ' bg-primary/20 font-semibold text-primary border-2 border-primary';
          if (isSelected) classes += ' bg-primary text-white font-semibold';
        }

        const dayEl = document.createElement('div');
        dayEl.className = classes;
        dayEl.textContent = day;
        if (!isPast) {
          dayEl.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
        daysContainer.appendChild(dayEl);
      }

      calendar.querySelector('.prev-month').onclick = e => {
        e.stopPropagation();
        currentDate.setMonth(month - 1);
        renderCalendar();
      };
      calendar.querySelector('.next-month').onclick = e => {
        e.stopPropagation();
        currentDate.setMonth(month + 1);
        renderCalendar();
      };

      daysContainer.onclick = e => {
        const dateStr = e.target.dataset.date;
        if (dateStr) {
          selectedDate = new Date(dateStr);
          selectedDate.setHours(0, 0, 0, 0);
          input.value = dateStr;
          displayInput.value = selectedDate.toLocaleDateString();
          dropdown.classList.add('hidden');
          renderCalendar();
        }
      };
    };

    displayInput.onclick = e => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
      if (!dropdown.classList.contains('hidden')) renderCalendar();
    };

    calendar.onclick = e => e.stopPropagation();
    document.addEventListener('click', e => {
      if (!container.contains(e.target)) dropdown.classList.add('hidden');
    });

    // Optional: Handle calendar icon click
    const icon = input.parentNode.querySelector('#date-picker-icon');
    if (icon) {
      icon.addEventListener('click', e => {
        e.stopPropagation();
        displayInput.click();
      });
    }
  });
}
createCustomDatePicker();