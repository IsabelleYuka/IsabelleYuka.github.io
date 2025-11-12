// =============================================
// BANCO DE DADOS COMPLETO (8 PETS - COMPLETO)
// =============================================
const pets = [
    {
        id: 1,
        name: "Thor",
        type: "dog",
        breed: "Golden Retriever",
        age: "3 anos",
        gender: "Macho",
        size: "Grande",
        description: "Brincalhão e cheio de energia! Adora crianças e outros animais.",
        img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: true,
        contact: {
            name: "Larissa Martins",
            phone: "(11) 9876-5432",
            email: "larissa.martins@example.com",
            canEdit: false
        }
    },
    {
        id: 2,
        name: "Luna",
        type: "cat",
        breed: "Siamês",
        age: "2 anos",
        gender: "Fêmea",
        size: "Médio",
        description: "Calma e carinhosa. Perfeita para apartamentos.",
        img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: true,
        contact: {
            name: "Carlos Silva",
            phone: "(11) 9123-4567",
            email: "carlos.silva@example.com",
            canEdit: false
        }
    },
    {
        id: 3,
        name: "Rex",
        type: "dog",
        breed: "Vira-lata",
        age: "4 anos",
        gender: "Macho",
        size: "Médio",
        description: "Protetor e leal. Já castrado e vacinado.",
        img: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: false,
        contact: {
            name: "Ana Oliveira",
            phone: "(11) 9234-5678",
            email: "ana.oliveira@example.com",
            canEdit: false
        }
    },
    {
        id: 4,
        name: "Mel",
        type: "cat",
        breed: "Persa",
        age: "1 ano",
        gender: "Fêmea",
        size: "Pequeno",
        description: "Tímida no início, mas muito amorosa quando cria confiança.",
        img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: true,
        contact: {
            name: "Marcos Souza",
            phone: "(11) 9345-6789",
            email: "marcos.souza@example.com",
            canEdit: false
        }
    },
    {
        id: 5,
        name: "Bolinha",
        type: "small",
        breed: "Hamster Sírio",
        age: "8 meses",
        gender: "Macho",
        size: "Pequeno",
        description: "Adora correr na rodinha e esconder comida nas bochechas!",
        img: "https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: false,
        contact: {
            name: "Julia Fernandes",
            phone: "(11) 9456-7890",
            email: "julia.fernandes@example.com",
            canEdit: false
        }
    },
    {
        id: 6,
        name: "Cotton",
        type: "small",
        breed: "Coelho Anão",
        age: "1 ano",
        gender: "Fêmea",
        size: "Pequeno",
        description: "Fofinha e tranquila. Adora cenouras e carinho na orelha.",
        img: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: true,
        contact: {
            name: "Rafael Lima",
            phone: "(11) 9567-8901",
            email: "rafael.lima@example.com",
            canEdit: false
        }
    },
    {
        id: 7,
        name: "Bella",
        type: "dog",
        breed: "Labrador",
        age: "2 anos",
        gender: "Fêmea",
        size: "Grande",
        description: "Dócil e obediente, adora brincar na água e buscar bolinhas.",
        img: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: true,
        contact: {
            name: "Carlos Eduardo",
            phone: "(11) 9666-7777",
            email: "carlos.eduardo@example.com",
            canEdit: false
        }
    },
    {
        id: 8,
        name: "Mingau",
        type: "cat",
        breed: "Persa",
        age: "5 anos",
        gender: "Macho",
        size: "Médio",
        description: "Tranquilo e caseiro, perfeito para quem busca um companheiro tranquilo.",
        img: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        featured: false,
        contact: {
            name: "Fernanda Oliveira",
            phone: "(11) 9777-8888",
            email: "fernanda.oliveira@example.com",
            canEdit: false
        }
    }
];

function generateId() {
    return Math.floor(Math.random() * 1000000) + Date.now();
}

// =============================================
// SISTEMA DE DOAÇÃO ATUALIZADO (FUNCIONANDO)
// =============================================
function setupDonationForm() {
    const donateForm = document.getElementById('donateForm');
    if (!donateForm) return;
    
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const petData = {
            nome: document.getElementById('petName').value,
            tipo: document.getElementById('petTipo').value,
            raca: document.getElementById('petBreed').value,
            idade: document.getElementById('petAge').value,
            sexo: document.getElementById('petGender').value,
            tamanho: document.getElementById('petSize').value,
            descricao: document.getElementById('petDescricao').value,
            fotos: [] // Armazenaremos as fotos/vídeos aqui
        };

        const mediaFiles = document.getElementById('petMedia').files;
        if (mediaFiles.length > 0) {
            for (let i = 0; i < mediaFiles.length; i++) {
                const file = mediaFiles[i];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    petData.fotos.push(e.target.result);
                    
                    if (petData.fotos.length === mediaFiles.length) {
                        salvarPet(petData);
                    }
                };
                reader.readAsDataURL(file);
            }
        } else {
            salvarPet(petData);
        }
    });
}

function salvarPet(petData) {
    const newPet = {
        id: generateId(),
        name: petData.nome,
        type: petData.tipo,
        breed: petData.raca,
        age: petData.idade,
        gender: petData.sexo,
        size: petData.tamanho,
        description: petData.descricao,
        img: petData.fotos[0] || 'https://via.placeholder.com/500',
        featured: true,
        contact: {
            name: document.getElementById('doadorNome').value,
            phone: document.getElementById('doadorPhone').value,
            email: document.getElementById('doadorEmail').value,
            canEdit: true
        }
    };
    
    pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));
    
    document.querySelector('.donate-form-container').innerHTML = `
        <div class="form-success">
            <i class="fas fa-check-circle"></i>
            <h3>Obrigado por doar ${newPet.name}!</h3>
            <p>Seu pet já está disponível para adoção.</p>
            <div class="pet-preview">
                <img src="${newPet.img}" alt="${newPet.name}">
                <h4>${newPet.name}</h4>
                <p>${newPet.breed} - ${newPet.age}</p>
            </div>
            <a href="adotar.html" class="btn">Ver Pets para Adoção</a>
        </div>
    `;
}

// =============================================
// SISTEMA DE FILTROS (NOVO - COMPLETO)
// =============================================
function aplicarFiltros() {
    const tipo = document.getElementById('filtro-tipo').value;
    const porte = document.getElementById('filtro-porte').value;
    const genero = document.getElementById('filtro-genero').value;

    const petsFiltrados = pets.filter(pet => {
        return (tipo === 'todos' || pet.type === tipo) &&
               (porte === 'todos' || pet.size === porte) &&
               (genero === 'todos' || pet.gender === genero);
    });

    const container = document.getElementById('petsContainer');
    container.innerHTML = '';

    if (petsFiltrados.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum pet encontrado com esses filtros 😢</p>';
        return;
    }

    petsFiltrados.forEach(pet => {
        container.appendChild(createPetCard(pet));
    });
}

// =============================================
// FUNÇÕES DE EDIÇÃO/EXCLUSÃO (NOVAS)
// =============================================
function openEditForm(petId) {
    const pet = pets.find(p => p.id === petId);
    if (!pet) return;

    const modal = document.getElementById('petModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Editar ${pet.name}</h2>
            <form id="editPetForm" class="edit-form">
                <div class="form-group">
                    <label for="editName">Nome</label>
                    <input type="text" id="editName" value="${pet.name}" required>
                </div>
                
                <div class="form-group">
                    <label for="editType">Tipo</label>
                    <select id="editType" required>
                        <option value="dog" ${pet.type === 'dog' ? 'selected' : ''}>Cachorro</option>
                        <option value="cat" ${pet.type === 'cat' ? 'selected' : ''}>Gato</option>
                        <option value="small" ${pet.type === 'small' ? 'selected' : ''}>Pequeno Animal</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="editBreed">Raça</label>
                    <input type="text" id="editBreed" value="${pet.breed}" required>
                </div>
                
                <div class="form-group">
                    <label for="editAge">Idade</label>
                    <input type="text" id="editAge" value="${pet.age}" required>
                </div>
                
                <div class="form-group">
                    <label for="editGender">Sexo</label>
                    <select id="editGender" required>
                        <option value="Macho" ${pet.gender === 'Macho' ? 'selected' : ''}>Macho</option>
                        <option value="Fêmea" ${pet.gender === 'Fêmea' ? 'selected' : ''}>Fêmea</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="editSize">Tamanho</label>
                    <select id="editSize" required>
                        <option value="Pequeno" ${pet.size === 'Pequeno' ? 'selected' : ''}>Pequeno</option>
                        <option value="Médio" ${pet.size === 'Médio' ? 'selected' : ''}>Médio</option>
                        <option value="Grande" ${pet.size === 'Grande' ? 'selected' : ''}>Grande</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="editDescription">Descrição</label>
                    <textarea id="editDescription" rows="4" required>${pet.description}</textarea>
                </div>
                
                <div class="form-group">
                    <label for="editImg">URL da Imagem</label>
                    <input type="text" id="editImg" value="${pet.img}" required>
                </div>
                
                <div class="form-group">
                    <label for="editFeatured">Destaque</label>
                    <input type="checkbox" id="editFeatured" ${pet.featured ? 'checked' : ''}>
                </div>
                
                <div class="form-actions">
                    <button type="button" class="btn cancel-btn">Cancelar</button>
                    <button type="submit" class="btn save-btn">Salvar Alterações</button>
                </div>
            </form>
        </div>
    `;
    
    modal.style.display = "block";
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    modal.querySelector('.cancel-btn').addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    document.getElementById('editPetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        updatePet(petId);
    });
}

function updatePet(petId) {
    const petIndex = pets.findIndex(p => p.id === petId);
    if (petIndex === -1) return;
    
    const updatedPet = {
        ...pets[petIndex],
        name: document.getElementById('editName').value,
        type: document.getElementById('editType').value,
        breed: document.getElementById('editBreed').value,
        age: document.getElementById('editAge').value,
        gender: document.getElementById('editGender').value,
        size: document.getElementById('editSize').value,
        description: document.getElementById('editDescription').value,
        img: document.getElementById('editImg').value,
        featured: document.getElementById('editFeatured').checked
    };
    
    pets[petIndex] = updatedPet;
    localStorage.setItem('pets', JSON.stringify(pets));
    
    document.getElementById('petModal').style.display = "none";
    refreshPetList();
    alert("Pet atualizado com sucesso!");
}

function deletePet(petId) {
    if (!confirm("Tem certeza que deseja excluir este pet? Esta ação não pode ser desfeita.")) {
        return;
    }
    
    const petIndex = pets.findIndex(p => p.id === petId);
    if (petIndex === -1) return;
    
    pets.splice(petIndex, 1);
    localStorage.setItem('pets', JSON.stringify(pets));
    refreshPetList();
    alert("Pet excluído com sucesso!");
}

function refreshPetList() {
    if (document.getElementById('featuredPets')) {
        loadFeaturedPets();
    } else if (document.getElementById('petsContainer')) {
        loadAllPets();
    } else if (document.getElementById('favoritesContainer')) {
        loadFavorites();
    }
}

// =============================================
// FUNÇÕES PRINCIPAIS (ORIGINAIS - COMPLETAS)
// =============================================
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentQuestionIndex = 0;
let compatibilityScores = { dog: 0, cat: 0, small: 0 };

function createPetCard(pet) {
    const isFav = favorites.includes(pet.id);
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.dataset.id = pet.id;
    card.innerHTML = `
        <div class="pet-image-container">
            <img src="${pet.img}" alt="${pet.name}">
            <button class="favorite-btn ${isFav ? 'favorited' : ''}" data-id="${pet.id}">
                <i class="fas fa-heart"></i>
            </button>
            ${pet.contact.canEdit ? `
            <div class="admin-actions">
                <button class="edit-btn" data-id="${pet.id}"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" data-id="${pet.id}"><i class="fas fa-trash"></i></button>
            </div>
            ` : ''}
        </div>
        <div class="pet-info">
            <h3>${pet.name}</h3>
            <p><strong>Raça:</strong> ${pet.breed}</p>
            <p><strong>Idade:</strong> ${pet.age}</p>
        </div>
    `;
    
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const petId = parseInt(this.dataset.id);
        
        if (favorites.includes(petId)) {
            favorites = favorites.filter(id => id !== petId);
            this.classList.remove('favorited');
        } else {
            favorites.push(petId);
            this.classList.add('favorited');
        }
        
        updateFavorites();
        
        if (window.location.pathname.includes('favoritos.html')) {
            loadFavorites();
        }
    });
    
    const editBtn = card.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openEditForm(pet.id);
        });
    }
    
    const deleteBtn = card.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deletePet(pet.id);
        });
    }
    
    card.addEventListener('click', function() {
        openPetModal(pet.id);
    });
    
    return card;
}

function loadFeaturedPets() {
    const container = document.getElementById('featuredPets');
    if (!container) return;
    
    const featured = pets.filter(pet => pet.featured);
    featured.slice(0, 3).forEach(pet => {
        container.appendChild(createPetCard(pet));
    });
}

function loadAllPets() {
    const container = document.getElementById('petsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    pets.forEach(pet => {
        container.appendChild(createPetCard(pet));
    });
}

function loadFavorites() {
    const container = document.getElementById('favoritesContainer');
    const noFavText = document.getElementById('noFavorites');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (favorites.length === 0) {
        noFavText.style.display = 'block';
        return;
    }
    
    noFavText.style.display = 'none';
    
    favorites.forEach(favId => {
        const pet = pets.find(p => p.id == favId);
        if (pet) {
            container.appendChild(createPetCard(pet));
        }
    });
}

function openPetModal(petId) {
    const pet = pets.find(p => p.id == petId);
    const modal = document.getElementById('petModal');
    
    if (!pet || !modal) return;
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-pet">
                <img src="${pet.img}" alt="${pet.name}">
                <div class="modal-pet-info">
                    <h3>${pet.name}</h3>
                    <p><strong>Espécie:</strong> ${getPetType(pet.type)}</p>
                    <p><strong>Raça:</strong> ${pet.breed}</p>
                    <p><strong>Idade:</strong> ${pet.age}</p>
                    <p><strong>Sexo:</strong> ${pet.gender}</p>
                    <p><strong>Tamanho:</strong> ${pet.size}</p>
                    <p class="pet-description">${pet.description}</p>
                    
                    <div class="contact-info">
                        <h4>Contato do Responsável:</h4>
                        <p><i class="fas fa-user"></i> ${pet.contact.name}</p>
                        <p><i class="fas fa-phone"></i> ${pet.contact.phone}</p>
                        <p><i class="fas fa-envelope"></i> ${pet.contact.email}</p>
                    </div>
                    
                    <button class="btn adopt-btn">Quero Adotar</button>
                    <button class="btn favorite-modal-btn ${favorites.includes(pet.id) ? 'favorited' : ''}" 
                            data-id="${pet.id}">
                        <i class="fas fa-heart"></i>
                        ${favorites.includes(pet.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.style.display = "none";
    });
    
    const modalFavBtn = modal.querySelector('.favorite-modal-btn');
    if (modalFavBtn) {
        modalFavBtn.addEventListener('click', function() {
            const petId = parseInt(this.dataset.id);
            
            if (favorites.includes(petId)) {
                favorites = favorites.filter(id => id !== petId);
                this.classList.remove('favorited');
                this.innerHTML = `
                    <i class="fas fa-heart"></i>
                    Adicionar aos Favoritos
                `;
            } else {
                favorites.push(petId);
                this.classList.add('favorited');
                this.innerHTML = `
                    <i class="fas fa-heart"></i>
                    Remover dos Favoritos
                `;
            }
            
            updateFavorites();
            
            if (window.location.pathname.includes('favoritos.html')) {
                loadFavorites();
            }
        });
    }
    
    const adoptBtn = modal.querySelector('.adopt-btn');
    if (adoptBtn) {
        adoptBtn.addEventListener('click', () => {
            alert(`Você escolheu adotar ${pet.name}! 🎉\n\nEntre em contato com ${pet.contact.name} pelo telefone ${pet.contact.phone} ou email ${pet.contact.email}`);
            modal.style.display = "none";
        });
    }
}

function getPetType(type) {
    const types = {
        dog: "Cachorro",
        cat: "Gato",
        small: "Pequeno Animal"
    };
    return types[type] || type;
}

function updateFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
}

function updateFavoritesBadge() {
    const badges = document.querySelectorAll('.favorites-badge');
    badges.forEach(badge => {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length > 0 ? 'flex' : 'none';
    });
}

// =============================================
// TESTE DE COMPATIBILIDADE (ORIGINAL)
// =============================================
const compatibilityQuestions = [
    {
        question: "Qual é o seu tipo de residência?",
        options: [
            { text: "Apartamento pequeno", values: { dog: -1, cat: 2, small: 3 } },
            { text: "Apartamento grande/casa com quintal", values: { dog: 2, cat: 3, small: 1 } },
            { text: "Casa com grande quintal/área rural", values: { dog: 3, cat: 1, small: 0 } }
        ]
    },
    {
        question: "Quanto tempo você pode dedicar ao pet diariamente?",
        options: [
            { text: "Menos de 1 hora", values: { dog: -1, cat: 3, small: 2 } },
            { text: "1-2 horas", values: { dog: 1, cat: 3, small: 2 } },
            { text: "Mais de 3 horas", values: { dog: 3, cat: 2, small: 1 } }
        ]
    },
    {
        question: "Qual é o seu estilo de vida?",
        options: [
            { text: "Sedentário/Home office", values: { dog: 1, cat: 3, small: 2 } },
            { text: "Ativo mas com rotina", values: { dog: 3, cat: 2, small: 1 } },
            { text: "Muito ocupado e imprevisível", values: { dog: -2, cat: 3, small: 2 } }
        ]
    }
];

function startCompatibilityTest() {
    currentQuestionIndex = 0;
    compatibilityScores = { dog: 0, cat: 0, small: 0 };
    renderQuestion();
}

function renderQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    if (currentQuestionIndex >= compatibilityQuestions.length) {
        showResult();
        return;
    }

    const currentQuestion = compatibilityQuestions[currentQuestionIndex];
    let optionsHTML = currentQuestion.options.map((option, index) => `
        <button class="quiz-option" data-index="${index}">
            ${option.text}
        </button>
    `).join('');

    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h3>${currentQuestion.question}</h3>
            <div class="quiz-options">${optionsHTML}</div>
            <div class="quiz-progress">
                Pergunta ${currentQuestionIndex + 1} de ${compatibilityQuestions.length}
            </div>
        </div>
    `;

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const optionIndex = parseInt(e.target.dataset.index);
            processAnswer(optionIndex);
        });
    });
}

function processAnswer(optionIndex) {
    const currentQuestion = compatibilityQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];

    for (const petType in selectedOption.values) {
        compatibilityScores[petType] += selectedOption.values[petType];
    }

    currentQuestionIndex++;
    renderQuestion();
}

function showResult() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;

    let resultType = 'dog';
    if (compatibilityScores.cat > compatibilityScores[resultType]) resultType = 'cat';
    if (compatibilityScores.small > compatibilityScores[resultType]) resultType = 'small';

    const recommendedPets = pets.filter(pet => pet.type === resultType).slice(0, 3);

    quizContainer.innerHTML = `
        <div class="quiz-result">
            <h3><i class="fas fa-paw"></i> Seu pet ideal é um ${getPetType(resultType)}!</h3>
            <p>Baseado nas suas respostas, aqui estão alguns pets perfeitos para você:</p>
            <div class="recommended-pets">
                ${recommendedPets.map(pet => `
                    <div class="pet-card" onclick="openPetModal(${pet.id})">
                        <img src="${pet.img}" alt="${pet.name}">
                        <h4>${pet.name}</h4>
                    </div>
                `).join('')}
            </div>
            <button onclick="startCompatibilityTest()" class="btn">Refazer teste</button>
        </div>
    `;
}

// =============================================
// INICIALIZAÇÃO (ATUALIZADA)
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Carrega pets do localStorage (se existirem)
    const savedPets = JSON.parse(localStorage.getItem('pets'));
    if (savedPets && savedPets.length > 0) {
        pets.length = 0; // Limpa o array existente
        pets.push(...savedPets); // Adiciona os pets salvos
    }

    if (document.getElementById('featuredPets')) {
        loadFeaturedPets();
    } else if (document.getElementById('petsContainer')) {
        loadAllPets();
    } else if (document.getElementById('favoritesContainer')) {
        loadFavorites();
    }

    setupDonationForm();
    updateFavoritesBadge();

    if (document.getElementById('quizContainer')) {
        startCompatibilityTest();
    }

    // Inicialização dos Filtros
    if (document.getElementById('aplicar-filtros')) {
        document.getElementById('aplicar-filtros').addEventListener('click', aplicarFiltros);
    }

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('petModal');
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// =============================================
// PREVIEW DE MÍDIAS (PARA O FORMULÁRIO)
// =============================================
document.getElementById('petMedia').addEventListener('change', function(e) {
    const files = e.target.files;
    const mediaGallery = document.getElementById('mediaGallery');
    
    mediaGallery.innerHTML = '';

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const mediaElement = document.createElement('div');
            mediaElement.className = 'media-item';

            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.className = 'media-preview';
                mediaElement.appendChild(img);
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                video.className = 'media-preview';
                mediaElement.appendChild(video);
            }

            mediaGallery.appendChild(mediaElement);
        }
    }
});