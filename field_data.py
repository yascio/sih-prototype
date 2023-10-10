import requests

api_url = 'http://15.207.3.65:5000'  


def get_field_data():
    try:
        response = requests.get(f'{api_url}/get_data')
        response_data = response.json()
        return response_data
    except Exception as e:
        return {'error': str(e)}

if __name__ == '__main__':
    field_data = get_field_data()
    print( field_data)
