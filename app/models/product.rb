class Product < ApplicationRecord
    mount_uploader :avatar_path, AvatarUploader
    has_many :materials,dependent: :destroy
end
