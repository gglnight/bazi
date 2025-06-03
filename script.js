// BaZi - The Way of Destiny - Complete Working Script
console.log("🚀 BaZi script loading...");

// BaZi Data Constants
const HEAVENLY_STEMS = {
    0: {chinese: '甲', element: 'wood', yin_yang: 'yang'},
    1: {chinese: '乙', element: 'wood', yin_yang: 'yin'},
    2: {chinese: '丙', element: 'fire', yin_yang: 'yang'},
    3: {chinese: '丁', element: 'fire', yin_yang: 'yin'},
    4: {chinese: '戊', element: 'earth', yin_yang: 'yang'},
    5: {chinese: '己', element: 'earth', yin_yang: 'yin'},
    6: {chinese: '庚', element: 'metal', yin_yang: 'yang'},
    7: {chinese: '辛', element: 'metal', yin_yang: 'yin'},
    8: {chinese: '壬', element: 'water', yin_yang: 'yang'},
    9: {chinese: '癸', element: 'water', yin_yang: 'yin'}
};

const EARTHLY_BRANCHES = {
    0: {chinese: '子', element: 'water', animal: 'Rat'},
    1: {chinese: '丑', element: 'earth', animal: 'Ox'},
    2: {chinese: '寅', element: 'wood', animal: 'Tiger'},
    3: {chinese: '卯', element: 'wood', animal: 'Rabbit'},
    4: {chinese: '辰', element: 'earth', animal: 'Dragon'},
    5: {chinese: '巳', element: 'fire', animal: 'Snake'},
    6: {chinese: '午', element: 'fire', animal: 'Horse'},
    7: {chinese: '未', element: 'earth', animal: 'Goat'},
    8: {chinese: '申', element: 'metal', animal: 'Monkey'},
    9: {chinese: '酉', element: 'metal', animal: 'Rooster'},
    10: {chinese: '戌', element: 'earth', animal: 'Dog'},
    11: {chinese: '亥', element: 'water', animal: 'Pig'}
};

// Global Variables
let currentChart = null;

// Core BaZi Functions
function showTab(tabName) {
    console.log("🔄 Switching to tab:", tabName);

    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to selected tab and content
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Add active to clicked tab
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function calculateBaZi(birthDate, birthTime) {
    const date = new Date(birthDate + 'T' + birthTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();

    // Simplified BaZi calculations for demonstration
    const yearStemIndex = (year - 4) % 10;
    const yearBranchIndex = (year - 4) % 12;
    const monthStemIndex = (yearStemIndex * 2 + month) % 10;
    const monthBranchIndex = (month + 1) % 12;
    const dayStemIndex = ((year - 1900) * 365 + Math.floor((year - 1900) / 4) + day) % 10;
    const dayBranchIndex = ((year - 1900) * 365 + Math.floor((year - 1900) / 4) + day) % 12;
    const hourStemIndex = (dayStemIndex * 2 + Math.floor(hour / 2)) % 10;
    const hourBranchIndex = Math.floor(hour / 2) % 12;

    return {
        year: {
            stem: HEAVENLY_STEMS[yearStemIndex],
            branch: EARTHLY_BRANCHES[yearBranchIndex]
        },
        month: {
            stem: HEAVENLY_STEMS[monthStemIndex],
            branch: EARTHLY_BRANCHES[monthBranchIndex]
        },
        day: {
            stem: HEAVENLY_STEMS[dayStemIndex],
            branch: EARTHLY_BRANCHES[dayBranchIndex]
        },
        hour: {
            stem: HEAVENLY_STEMS[hourStemIndex],
            branch: EARTHLY_BRANCHES[hourBranchIndex]
        }
    };
}

// Wisdom and Personality Functions
function getPersonalityTraits(element, yinYang) {
    const traits = {
        wood: {
            yang: "Like the mighty oak - creative, ambitious, pioneering, with the patience of growth",
            yin: "Like flowing bamboo - gentle, flexible, artistic, diplomatic in nature"
        },
        fire: {
            yang: "Like the bright sun - energetic, charismatic, passionate, illuminating all around",
            yin: "Like gentle candlelight - warm, intuitive, spiritual, bringing quiet wisdom"
        },
        earth: {
            yang: "Like the eternal mountain - stable, reliable, practical, providing foundation",
            yin: "Like fertile soil - nurturing, patient, supportive, attending to details"
        },
        metal: {
            yang: "Like forged steel - strong-willed, organized, decisive, upholding justice",
            yin: "Like precious jade - precise, elegant, perfectionist, seeking quality"
        },
        water: {
            yang: "Like the vast ocean - adaptable, intelligent, resourceful, communicating depths",
            yin: "Like morning dew - wise, intuitive, mysterious, contemplating profundity"
        }
    };
    return traits[element][yinYang];
}

function getSageWisdom(element) {
    const wisdom = {
        wood: "Ah, the Wood essence flows within you. Like the great tree that bends with the storm yet never breaks, you carry the wisdom of growth and renewal. Yang Wood is the mighty oak - ambitious and reaching skyward. Yin Wood is the flexible bamboo - yielding yet unbreakable. Both understand that true strength comes not from rigidity, but from the ability to grow toward the light.",
        fire: "The Fire spirit burns bright in your being. Like the sun that gives life to all things without asking for gratitude, you possess the gift of illumination. Yang Fire burns like the eternal flame - passionate and illuminating the world. Yin Fire glows like the gentle candle - bringing warmth and wisdom to intimate spaces. Remember, the flame that burns brightest often consumes itself first.",
        earth: "The Earth element grounds your spirit in eternal wisdom. Like the mountain that stands unmoved by wind and rain, you embody stability and patience. Yang Earth is the mighty mountain - reliable and enduring. Yin Earth is the fertile valley - nurturing and supportive. Both understand that in stillness, all movement is possible.",
        metal: "The Metal essence shapes your character with precision and clarity. Like the sword that cuts through illusion to reveal truth, you possess the gift of discernment. Yang Metal is the blade of justice - direct and unwavering. Yin Metal is the precious jewel - refined and beautiful. Both understand that true value comes from purity of purpose.",
        water: "The Water spirit flows through your being with infinite wisdom. Like the river that always finds its way to the sea, you understand the power of persistence through yielding. Yang Water is the vast ocean - deep and mysterious. Yin Water is the gentle stream - quiet yet persistent. Both know that the softest thing in the world overcomes the hardest."
    };
    return wisdom[element] || "Each element carries its own profound wisdom for those who listen with open hearts.";
}

function getPillarWisdom(pillarType) {
    const wisdom = {
        year: "The Year Pillar reveals how the world first knew you - the mask you wear in society's grand theater. It speaks of your ancestors' gifts and burdens, the karma inherited and the destiny to be transformed. Like the roots of a tree, it grounds you in the earth of your beginnings.",
        month: "The Month Pillar illuminates your working spirit - how you engage with the world in the prime of your power. Here dwells your relationship with career, achievement, and the bonds that sustain you through life's seasons. It is the trunk of your existence, strong and visible to all.",
        day: "The Day Pillar is your truest self - the core that remains when all masks are removed. This is your essence, your inner nature, the seed from which all your other aspects grow. Like the heartwood of the tree, it gives structure to everything else. To know this pillar is to know yourself.",
        hour: "The Hour Pillar whispers of your hidden depths - your private thoughts, your children's potential, and how you will meet old age. It is the crown of your tree, reaching toward heaven, speaking to the legacy you will leave and the wisdom you will gather in your final seasons."
    };
    return wisdom[pillarType] || "Each pillar holds its own sacred teachings.";
}

// Main Chart Generation
function generateChart() {
    console.log("🎯 Generating BaZi chart...");

    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const gender = document.getElementById('gender').value;

    if (!birthDate || !birthTime) {
        addSageMessage("Please provide your birth date and time, seeker, so I may read the celestial patterns of your destiny.");
        return;
    }

    const chart = calculateBaZi(birthDate, birthTime);
    currentChart = chart;

    const resultDiv = document.getElementById('chartResult');
    resultDiv.innerHTML = `
        <div class="chart-container">
            <h3>Your Four Pillars Revealed</h3>
            <div class="pillars-grid">
                <div class="pillar" onclick="explainPillar('year')">
                    <h4>Year Pillar</h4>
                    <div class="stem-branch">
                        <div class="chinese">${chart.year.stem.chinese}</div>
                        <div class="element ${chart.year.stem.element}">${chart.year.stem.element.toUpperCase()}</div>
                    </div>
                    <div class="stem-branch">
                        <div class="chinese">${chart.year.branch.chinese}</div>
                        <div class="element ${chart.year.branch.element}">${chart.year.branch.element.toUpperCase()}</div>
                        <div style="font-size: 11px; margin-top: 5px; color: rgba(120, 219, 226, 0.7);">${chart.year.branch.animal}</div>
                    </div>
                </div>
                <div class="pillar" onclick="explainPillar('month')">
                    <h4>Month Pillar</h4>
                    <div class="stem-branch">
                        <div class="chinese">${chart.month.stem.chinese}</div>
                        <div class="element ${chart.month.stem.element}">${chart.month.stem.element.toUpperCase()}</div>
                    </div>
                    <div class="stem-branch">
                        <div class="chinese">${chart.month.branch.chinese}</div>
                        <div class="element ${chart.month.branch.element}">${chart.month.branch.element.toUpperCase()}</div>
                        <div style="font-size: 11px; margin-top: 5px; color: rgba(120, 219, 226, 0.7);">${chart.month.branch.animal}</div>
                    </div>
                </div>
                <div class="pillar" onclick="explainPillar('day')">
                    <h4>Day Pillar ☯</h4>
                    <div class="stem-branch">
                        <div class="chinese">${chart.day.stem.chinese}</div>
                        <div class="element ${chart.day.stem.element}">${chart.day.stem.element.toUpperCase()}</div>
                    </div>
                    <div class="stem-branch">
                        <div class="chinese">${chart.day.branch.chinese}</div>
                        <div class="element ${chart.day.branch.element}">${chart.day.branch.element.toUpperCase()}</div>
                        <div style="font-size: 11px; margin-top: 5px; color: rgba(120, 219, 226, 0.7);">${chart.day.branch.animal}</div>
                    </div>
                </div>
                <div class="pillar" onclick="explainPillar('hour')">
                    <h4>Hour Pillar</h4>
                    <div class="stem-branch">
                        <div class="chinese">${chart.hour.stem.chinese}</div>
                        <div class="element ${chart.hour.stem.element}">${chart.hour.stem.element.toUpperCase()}</div>
                    </div>
                    <div class="stem-branch">
                        <div class="chinese">${chart.hour.branch.chinese}</div>
                        <div class="element ${chart.hour.branch.element}">${chart.hour.branch.element.toUpperCase()}</div>
                        <div style="font-size: 11px; margin-top: 5px; color: rgba(120, 219, 226, 0.7);">${chart.hour.branch.animal}</div>
                    </div>
                </div>
            </div>

            <div class="analysis-section">
                <h3>The Pattern Revealed</h3>
                <p><strong>Your Essence (Day Master):</strong> ${chart.day.stem.chinese} (${chart.day.stem.element.toUpperCase()}) - The core of your being</p>
                <p><strong>Natural Expression:</strong> ${getPersonalityTraits(chart.day.stem.element, chart.day.stem.yin_yang)}</p>
            </div>

            <div class="sage-suggestion" onclick="askWisdom('Reveal the deeper meaning of my Four Pillars')">
                ☯ "The sage says: Click here to understand the deeper currents of your destiny"
            </div>
        </div>
    `;

    setTimeout(() => {
        addSageMessage(`Ah, the celestial patterns align to reveal your path. Your essence is ${chart.day.stem.chinese} (${chart.day.stem.element.toUpperCase()}), and I see the dance of elements within your being.

${getSageWisdom(chart.day.stem.element)}

Touch any pillar above to hear its whispered secrets, or ask me to illuminate the shadows of your destiny.`);
    }, 1000);
}

function explainPillar(pillarType) {
    if (!currentChart) {
        addSageMessage("First, child, reveal your Four Pillars so that I may read the language of heaven in your chart.");
        return;
    }

    const pillar = currentChart[pillarType];
    const message = `Speak to me of my ${pillarType} pillar`;
    addUserMessage(message);

    setTimeout(() => {
        let response = `The ${pillarType.toUpperCase()} PILLAR: ${pillar.stem.chinese}${pillar.branch.chinese}\n\n`;
        response += `${getPillarWisdom(pillarType)}\n\n`;
        response += `Within this pillar dwells:\n`;
        response += `• ${pillar.stem.chinese} - the ${pillar.stem.element} essence in its ${pillar.stem.yin_yang} form\n`;
        response += `• ${pillar.branch.chinese} - the ${pillar.branch.element} energy of the ${pillar.branch.animal}\n\n`;

        if (pillarType === 'day') {
            response += `☯ This pillar holds your truest self - your Day Master.\n`;
            response += `${getSageWisdom(pillar.stem.element)}`;
        }

        addSageMessage(response);
    }, 1200);
}

// Chat Functions
function addUserMessage(message) {
    const wisdomMessages = document.getElementById('wisdomMessages');
    if (!wisdomMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = message;
    wisdomMessages.appendChild(messageDiv);
    wisdomMessages.scrollTop = wisdomMessages.scrollHeight;
}

function addSageMessage(message) {
    const wisdomMessages = document.getElementById('wisdomMessages');
    if (!wisdomMessages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sage-message';
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    wisdomMessages.appendChild(messageDiv);
    wisdomMessages.scrollTop = wisdomMessages.scrollHeight;
}

function showTyping() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.add('show');
    }
}

function hideTyping() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.classList.remove('show');
    }
}

function sendWisdom() {
    const input = document.getElementById('wisdomInput');
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    addUserMessage(message);
    input.value = '';

    showTyping();

    setTimeout(() => {
        hideTyping();
        const response = generateSageResponse(message);
        addSageMessage(response);
    }, 1500 + Math.random() * 1500);
}

function askWisdom(question) {
    addUserMessage(question);
    showTyping();

    setTimeout(() => {
        hideTyping();
        const response = generateSageResponse(question);
        addSageMessage(response);
    }, 1200);
}

function handleWisdomKeyPress(event) {
    if (event.key === 'Enter') {
        sendWisdom();
    }
}

function generateSageResponse(userMessage) {
    const message = userMessage.toLowerCase();

    if (currentChart) {
        if (message.includes('essence') || message.includes('day master') || message.includes('nature')) {
            const dayMaster = currentChart.day.stem;
            return `Your essence is ${dayMaster.chinese}, the ${dayMaster.element} in its ${dayMaster.yin_yang} form.

${getSageWisdom(dayMaster.element)}

Remember, child - you are not your chart, but the consciousness that observes it. The chart reveals tendencies, not absolutes. The Tao flows through all patterns yet remains beyond them.`;
        }

        if (message.includes('path') || message.includes('destiny') || message.includes('reveal') || message.includes('deeper')) {
            return `☯ The Deep Currents of Your Destiny ☯

Your Four Pillars sing this song:
Year: ${currentChart.year.stem.chinese}${currentChart.year.branch.chinese} - how the world first knew you
Month: ${currentChart.month.stem.chinese}${currentChart.month.branch.chinese} - your worldly engagement
Day: ${currentChart.day.stem.chinese}${currentChart.day.branch.chinese} - your eternal essence ☯
Hour: ${currentChart.hour.stem.chinese}${currentChart.hour.branch.chinese} - your hidden depths

${getSageWisdom(currentChart.day.stem.element)}

Remember - these are tendencies, not chains. The truly awakened person transcends their chart while honoring its wisdom. You are both the river and the consciousness that observes its flow.`;
        }

        if (message.includes('harmony') || message.includes('balance')) {
            return `True harmony comes not from perfection but from acceptance. Like a garden where different flowers bloom in their own season, your elements each have their time and purpose.

The Tao teaches us: Water does not compete with fire for dominance, yet together they create the mist that nourishes all life.

To find balance, neither suppress your challenging elements nor cling to your strong ones. Simply observe them with compassion, like a sage watching clouds pass across the sky.`;
        }
    }

    const sageResponses = [
        "The Tao that can be spoken is not the eternal Tao. Your question points to a truth that words cannot fully capture. Sit quietly with your chart, and let understanding arise naturally.",
        "Like water seeking its course, your question flows toward wisdom. Yet sometimes the most profound answers come not from words but from silent contemplation of the patterns heaven has written in your being.",
        "The sage teaches without teaching, leads without leading. Your chart is a mirror - it shows not what you must become, but what you already are. Look deeper, and you will find what you seek.",
        "The wise person asks not what their destiny holds, but how to align with the natural flow of existence. Generate your chart first, and I will help you read the language of heaven written in your birth moment."
    ];

    return sageResponses[Math.floor(Math.random() * sageResponses.length)];
}

// Enhanced functions for other tabs
function analyzeElements() {
    if (!currentChart) {
        addSageMessage("First, child, generate your Four Pillars. Then I can reveal how the elements dance within your being.");
        return;
    }

    const elements = [
        currentChart.year.stem.element, currentChart.year.branch.element,
        currentChart.month.stem.element, currentChart.month.branch.element,
        currentChart.day.stem.element, currentChart.day.branch.element,
        currentChart.hour.stem.element, currentChart.hour.branch.element
    ];

    const elementCount = {wood: 0, fire: 0, earth: 0, metal: 0, water: 0};
    elements.forEach(elem => elementCount[elem]++);

    const total = elements.length;
    const strengths = {};
    Object.keys(elementCount).forEach(elem => {
        strengths[elem] = Math.round((elementCount[elem] / total) * 100);
    });

    const resultDiv = document.getElementById('elementResult');
    resultDiv.innerHTML = `
        <div class="analysis-section">
            <h3>The Elemental Dance Within</h3>
            ${Object.keys(elementCount).map(element => `
                <div style="display: flex; justify-content: space-between; margin: 15px 0; align-items: center;">
                    <span><strong>${element.toUpperCase()}:</strong></span>
                    <div style="width: 200px; height: 8px; background: rgba(60, 60, 60, 0.8); border-radius: 4px; overflow: hidden; border: 1px solid rgba(120, 119, 198, 0.2);">
                        <div class="element ${element}" style="height: 100%; width: ${strengths[element]}%; border-radius: 4px; transition: width 0.8s ease;"></div>
                    </div>
                    <span>${strengths[element]}%</span>
                </div>
            `).join('')}
        </div>

        <div class="sage-suggestion" onclick="askWisdom('How can I bring my elements into harmony?')">
            ☯ "Ask the sage: How can I bring my elements into perfect balance?"
        </div>
    `;

    addSageMessage(`The elements within you reveal their secrets:

${Object.keys(elementCount).map(elem => `${elem.toUpperCase()}: ${strengths[elem]}%`).join('\n')}

Your Day Master ${currentChart.day.stem.chinese} (${currentChart.day.stem.element.toUpperCase()}) flows with ${strengths[currentChart.day.stem.element]}% presence in your chart.

${strengths[currentChart.day.stem.element] >= 25 ?
'With strong elemental support, you may benefit from elements that provide outlet for your abundant energy.' :
'With gentle elemental presence, you flourish when supported by elements that nourish your core nature.'}

The dance of elements within you creates your unique cosmic signature. Ask me how to harmonize these energies in your daily life.`);
}

function checkCompatibility() {
    addSageMessage("To read the harmony between two paths, I need both souls to reveal their Four Pillars. Generate your chart first, then ask your companion to do the same. The dance of compatibility reveals itself only when both patterns are known.");
}

function calculateLuck() {
    if (!currentChart) {
        addSageMessage("The cycles of destiny flow from your birth moment. First, generate your Four Pillars, then I shall reveal how the great wheel of time turns for you.");
        return;
    }

    const resultDiv = document.getElementById('luckResult');
    resultDiv.innerHTML = `
        <div class="analysis-section">
            <h3>The Great Cycles of Your Life</h3>
            <p>Your life unfolds in ten-year periods, each bringing its own lessons and opportunities. Like seasons in nature, each cycle has its perfect timing.</p>

            <div style="background: rgba(30, 30, 30, 0.6); border: 1px solid rgba(120, 119, 198, 0.2); border-radius: 6px; padding: 20px; margin: 20px 0;">
                <h4>Current Life Season (Based on Your ${currentChart.day.stem.element.toUpperCase()} Nature)</h4>
                <p>Your ${currentChart.day.stem.element.toUpperCase()} Day Master suggests you are naturally aligned with cycles of ${currentChart.day.stem.element === 'wood' ? 'growth and renewal' : currentChart.day.stem.element === 'fire' ? 'expansion and recognition' : currentChart.day.stem.element === 'earth' ? 'stability and building' : currentChart.day.stem.element === 'metal' ? 'refinement and achievement' : 'wisdom and flow'}.</p>
            </div>
        </div>

        <div class="sage-suggestion" onclick="askWisdom('What should I understand about my current life cycle?')">
            ☯ "Ask the sage about flowing with your current life season"
        </div>
    `;

    addSageMessage(`The wheel of your destiny turns according to cosmic rhythm. Your ${currentChart.day.stem.chinese} (${currentChart.day.stem.element.toUpperCase()}) nature suggests you resonate with cycles of patience and natural timing.

Each decade of life brings its own gifts:
- Youth: Learning and forming
- Prime: Building and achieving
- Maturity: Wisdom and guiding
- Elder years: Integration and transcendence

You are currently in a season that asks you to ${currentChart.day.stem.element === 'wood' ? 'grow steadily toward your goals' : currentChart.day.stem.element === 'fire' ? 'shine your light brightly' : currentChart.day.stem.element === 'earth' ? 'build solid foundations' : currentChart.day.stem.element === 'metal' ? 'refine and perfect your craft' : 'flow with wisdom and adapt'}.

What specific aspect of your current life cycle would you like to explore?`);
}

function generateForecast() {
    if (!currentChart) {
        addSageMessage("To read the currents of time, I first need to understand your cosmic blueprint. Generate your Four Pillars, then I can forecast how the energies flow for you.");
        return;
    }

    const resultDiv = document.getElementById('forecastResult');
    resultDiv.innerHTML = `
        <div class="analysis-section">
            <h3>The Flow of Coming Days</h3>
            <p>Time flows like water, and your ${currentChart.day.stem.element.toUpperCase()} nature interacts with each day's energy in unique ways.</p>

            <div style="background: rgba(30, 30, 30, 0.6); border: 1px solid rgba(120, 119, 198, 0.2); border-radius: 6px; padding: 20px; margin: 20px 0;">
                <h4>General Flow Pattern for ${currentChart.day.stem.chinese} (${currentChart.day.stem.element.toUpperCase()})</h4>
                <p>Your ${currentChart.day.stem.chinese} essence suggests you flow best when you ${currentChart.day.stem.element === 'wood' ? 'allow natural growth and avoid forcing outcomes' : currentChart.day.stem.element === 'fire' ? 'express your authentic self and share your light' : currentChart.day.stem.element === 'earth' ? 'move steadily and build on solid ground' : currentChart.day.stem.element === 'metal' ? 'focus on quality and precision in your actions' : 'adapt fluidly and trust your intuition'}.</p>
            </div>
        </div>

        <div class="sage-suggestion" onclick="askWisdom('How should I flow with the current energies?')">
            ☯ "Seek guidance on flowing with the present currents"
        </div>
    `;

    addSageMessage(`The river of time flows according to patterns both cosmic and personal. Your ${currentChart.day.stem.chinese} (${currentChart.day.stem.element.toUpperCase()}) nature suggests these natural rhythms:

🌅 **Morning Energy**: Best for ${currentChart.day.stem.element === 'wood' ? 'new projects and creative thinking' : currentChart.day.stem.element === 'fire' ? 'important communications and leadership' : currentChart.day.stem.element === 'earth' ? 'detailed work and planning' : currentChart.day.stem.element === 'metal' ? 'precision tasks and organization' : 'intuitive decisions and flowing activities'}

🌞 **Midday Power**: Optimal for ${currentChart.day.stem.element === 'wood' ? 'growth-oriented activities' : currentChart.day.stem.element === 'fire' ? 'public speaking and visibility' : currentChart.day.stem.element === 'earth' ? 'building and consolidating' : currentChart.day.stem.element === 'metal' ? 'important decisions' : 'collaborative efforts'}

🌙 **Evening Reflection**: Time for ${currentChart.day.stem.element === 'wood' ? 'nurturing relationships' : currentChart.day.stem.element === 'fire' ? 'creative expression' : currentChart.day.stem.element === 'earth' ? 'family and grounding' : currentChart.day.stem.element === 'metal' ? 'refinement and quality time' : 'meditation and inner wisdom'}

The key is not to force the river, but to read its currents and flow accordingly. What specific timeframe would you like me to illuminate?`);
}

// Initialize on page load
window.addEventListener('load', function() {
    console.log("🌟 BaZi application loaded");
    setTimeout(() => {
        addSageMessage(`Welcome, seeker of wisdom. I am here to guide you through the ancient art of the Four Pillars, as water guides the river to the sea.

The charts you create reveal not your fate, but your nature. Like the moon reflected in still water, your true self can be seen when the mind becomes quiet.

Begin by revealing your Four Pillars, then return to sit with me in contemplation. The greatest truths are found not in complex calculations, but in simple understanding.

"The journey of a thousand miles begins with a single step."`);
    }, 500);
});

// Debug functions (can be removed in production)
function testClick() {
    console.log("🎉 Test function working!");
    addSageMessage("Test function is working perfectly! All systems ready.");
}

function testTabClick() {
    console.log("🔥 Tab click test");
}

function testButtonClick() {
    console.log("🚀 Button click test");
}

console.log("✅ BaZi script fully loaded!");
