import os
import dropbox

def upload_file(file_name):
    access_token = "sl.A6Dh5fUcP3Jtut_XRwB8943Tkln83D1wkcgpMsDOPaezfAkuY1XsAP9MUHjRSYR_IVDoj8Z0gv-Y30IZVDeZ9LcXcKsLtIgLlitUFv6K-2fdhNpcn2ZojiIYEYQWPWgR5X4Z76cYqW0"
    file =file_name
    file_from ="C:/Users/Srividya/Desktop/python/temp/abc/"+file
    file_to="/abc/"+(file_name)
    dbx = dropbox.Dropbox(access_token)

    with open(file_from, 'rb') as f:
        dbx.files_upload(f.read(), file_to,mode=dropbox.files.WriteMode.overwrite)
        print("file uploaded")



files=os.listdir("C:/Users/Srividya/Desktop/python/temp/abc")
print(files)





for i in files:
    upload_file(i)